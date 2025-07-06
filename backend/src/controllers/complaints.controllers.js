import mongoose from "mongoose";
import { Complaint } from "../models/complaint.models.js";
import { Comment } from "../models/comment.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.utils.js";

async function postComplaint(req, res, next){
    try {
        /*
            1. we will be coming from auth middleware. have user object in req
            2. get complaint details and validate
            3. user, complaintType, complaintImage, description, location (lat, lng, address), complaintStatus
            4. if all required fields are made available then save the complaint object in db
        */
    
        const user = req.user;
        const complaintImage = req.file;
        const { complaintType, description, location } = req.body;
    
        if(!complaintImage){
            return res.status(400).json({
                success: false,
                message: "Complaint Image upload failed. Please try again"
            })
        }
    
        if(!complaintType || !description || !location){
            return res.status(400).json({
                success: false,
                message: "Required fields are empty"
            })
        }

        const jsonLocation = (typeof location === String)? JSON.parse(location) : location;

        if(!jsonLocation.lat || !jsonLocation.lng || !jsonLocation.address){
            return res.status(400).json({
                success: false,
                message: "Incomplete Location information"
            })
        }
    
        const uploadResponse = await uploadOnCloudinary(complaintImage.path);
    
        if(!uploadResponse || !uploadResponse.secure_url){
            return res.status(500).json({
                success: false,
                message: "Failed to upload image on Cloudinary"
            })
        }

        const geoLocation = {
            type: "Point",
            coordinates: [jsonLocation.lng, jsonLocation.lat],
            address: jsonLocation.address
        }

        const complaint = await Complaint.create({
            user: user._id,
            complaintType: complaintType,
            complaintImage: uploadResponse.secure_url,
            description: description,
            location: geoLocation,
            complaintStatus: "pending",
        })
    
        const complaintEntry = await Complaint.findById(complaint._id);
    
        if(!complaintEntry){
            return res.status(500).json({
                success: false,
                message: "Unable to create complaint. Please try again."
            });
        }
    
        return res.status(200).json({
            success: true,
            data: complaintEntry,
            message: "Successfully registered complaint."
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

// async function getAllComplaints(req, res, next){
//     try {
//         const allComplaints = await Complaint.find()
//             .populate("user", "username email")
//             .sort({createdAt: -1});
    
//         return res.status(200).json({
//             success: true,
//             data: allComplaints,
//             message: "Complaints fetched successfully"
//         });
//     } catch (error) {
//         return res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

async function getFilteredComplaints(req, res, next){
    try {
        /*
            1. find all complaints
            2. for users, fill in the Full name and username only
            3. filters : locality, complaintType, radius, sort based on createdAt
            4. fill comments count and upvotes count using aggregate pipelines
            5. send response
        */

        const { lat, lng, complaintType, radius } = req.query;
        
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);
        const distance = radius ? parseFloat(radius)*1000 : null; //in metres

        let matchComplaintTypeObject = null;
        let locationStage = null;

        let pipeline = [];

        if(complaintType){
            matchComplaintTypeObject = {complaintType: complaintType};
        }

        if( !isNaN(latitude) && !isNaN(longitude) && !isNaN(distance) ){
            locationStage  = {
                near: {
                    type: "Point",
                    coordinates: [longitude, latitude]
                },
                distanceField: "distance",
                maxDistance: distance,
                spherical: true
            }
        }

        if(locationStage){
            pipeline.push({
                $geoNear: locationStage
            })
        }
        if(matchComplaintTypeObject){
            pipeline.push({
                $match: matchComplaintTypeObject
            });
        }
        pipeline.push(
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "user"
                },
            },
            {
                $unwind: "$user"
            },
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "complaint",
                    as: "comments"
                }
            },
            {
                $addFields: {
                    commentCount: {
                        $size: "$comments"
                    },
                    upvoteCount: {
                        $size: { $ifNull: ["$upvotes", []] }
                    },
                    user: {
                        username: "$user.username",
                        firstName: "$user.firstName",
                        middleName: "$user.middleName",
                        lastName: "$user.lastName"
                    }
                }
            },
            {
                $project: {
                    user: 1,
                    complaintType: 1,
                    complaintImage: 1,
                    description: 1,
                    location: 1,
                    complaintStatus: 1,
                    comments: 0,
                    upvotes: 0,
                    commentCount: 1,
                    upvoteCount: 1,
                    createdAt: 1,
                    updatedAt: 1
                }
            }
        );

        pipeline.push({
            $sort: { createdAt: -1 }
        });

        const filteredComplaints = await Complaint.aggregate(pipeline);

        res.status(200).json({
            success: true,
            data: filteredComplaints,
            message: "Complaints data fetched successfully"
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

async function getComplaintById(req, res, next){
    try {
        /*
            1. we'll get id from params
            2. match in Complaint model for that complaint.
            3. populate user
            4. find comment and upvote count
            5. send response
        */
    
        const { complaintId } = req.params;
    
        if(!complaintId){
            return res.status(400).json({
                success: false,
                message: "Cannot get Complaint Id from params"
            });
        }
    
        let pipeline = [];
    
        pipeline.push(
            {
                $match: { _id: new mongoose.Types.ObjectId(complaintId) }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: "$user"
            },
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",
                    foreignField: "complaint",
                    as: "comments"
                }
            },
            {
                $addFields: {
                    commentCount: {$size: "$comments"},
                    upvoteCount: {$size: { $ifNull: ["$upvotes", []]}},
                    user: {
                        username: "$user.username",
                        firstName: "$user.firstName",
                        middleName: "$user.middleName",
                        lastName: "$user.lastName",
                    }
                }
            },
            {
                $project: {
                    user: 1,
                    complaintType: 1,
                    complaintImage: 1,
                    description: 1,
                    location: 1,
                    complaintStatus: 1,
                    comments: 0,
                    upvotes: 0,
                    commentCount: 1,
                    upvoteCount: 1,
                    createdAt: 1,
                    updatedAt: 1
                }
            }
        );
    
        const complaintObject = await Complaint.aggregate(pipeline);
    
        return res.status(200).json({
            success: true,
            data: complaintObject,
            message: "Complaint based on Id fetched successfully"
        });
    } catch (error) {
        return res.status(error.code).json({
            success: false,
            message: error.message
        });
    }
}

async function updateComplaint(req, res, next){

    try {
        /*
            1. coming from auth middleware
            2. get complaintId from req.params
            3. verify that if the user changing the complaint and the user who created complaint is same
            4. define modifiable fields
            5. extract data from req.body
            6. validate with modifiable fields
            7. change the required fields
            8. return response
        */
    
        const user = req.user;
        const {complaintId} = req.params;
    
        if(!complaintId){
            return res.status(400).json({
                success: false,
                message: "Cannot get complaint id from params"
            })
        }
    
        const complaintOwner = await Complaint.findById(complaintId).select("user");

        if(!complaintOwner){
            return res.status(404).json({
                success: false,
                message: "Complaint not found"
            });
        }
    
        if(complaintOwner.toString() !== user._id.toString()){
            // code:403 - forbidden
            return res.status(403).json({
                success: false,
                message: "User doesn't have right to modify this complaint."
            })
        }
    
        const modifiableFields = [ "complaintType", "description", "location" ];
    
        const updatedDetails = req.body;
    
        const finalDetails = {};
    
        for(const field of modifiableFields){
            if(updatedDetails[field]){
                finalDetails[field] = updatedDetails[field];
            }
        }
    
        const updatedComplaint = await Complaint.findByIdAndUpdate(
            complaintId, 
            {
                $set: finalDetails
            },
            {
                new: true,
                runValidators: true,
            }
        );
    
        return res.status(200).json({
            success: true,
            data: updatedComplaint,
            message: "Complaint Updated Successfully"
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteComplaint(req, res, next){
    try {
        /*
            1. coming from auth middleware
            2. get complaintId from req.params
            3. verify that if the user changing the complaint and the user who created complaint is same
            4. clear image from cloudinary url
            5. find all comments with this complaintid and delete all those comments
            6. delete complaint
        */
    
        const user = req.user;
        const {complaintId} = req.params;
    
        if(!complaintId){
            return res.status(400).json({
                success: false,
                message: "Cannot get complaint id from params"
            })
        }
    
        const complaint = await Complaint.findById(complaintId);
    
        if(!complaint){
            return res.status(404).json({
                success: false,
                message: "Complaint not found"
            });
        }
    
        if(complaint.user.toString() !== user._id.toString()){
            // code:403 - forbidden
            return res.status(403).json({
                success: false,
                message: "User doesn't have right to delete this complaint."
            });
        }
    
        // TODO: Delete image from cloudinary
    
        await Comment.deleteMany({ complaint: complaintId });
    
        await Complaint.findByIdAndDelete(complaintId);
    
        return res.status(200).json({
            success: true,
            message: "Complaint Deleted Successfully"
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

export { postComplaint, getFilteredComplaints, getComplaintById, updateComplaint, deleteComplaint };