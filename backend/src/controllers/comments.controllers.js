import mongoose from "mongoose";
import { Comment } from "../models/comment.models.js";
import { Complaint } from "../models/complaint.models.js";

async function postComment(req, res, next){
    try {
        /*
            1. coming from authmiddleware, get user from req
            2. get complaint id from params
            3. get commentText from body
            4. return res
        */
    
        const user = req.user;
        const {complaintId} = req.params;
        const {commentText} = req.body;
    
        if(!complaintId){
            return res.status(404).json({
                success: false,
                message: "Couldn't get complaint id from params"
            });
        }
    
        if(!commentText || commentText.trim().length === 0){
            return res.status(400).json({
                success: false,
                message: "Comment cannot be empty"
            });
        }
    
        const comment = await Comment.create({
            complaint: complaintId,
            user: user._id,
            commentText: commentText
        });
    
        return res.status(201).json({
            success: true,
            data: comment,
            message: "Successfully created comment"
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

async function getAllComments(req, res, next){
   try {
        /*
            1. get compliantId from params
            2. get all comments on that complaint by using aggregation pipeline
            3. return res
        */

        const {complaintId} = req.params;

        if(!complaintId){
            return res.status(400).json({
                success: false,
                message: "Couldn't get complaint id from params"
            });
        }

        const comments = await Complaint.aggregate([
            {
                $match: {_id: new mongoose.Types.ObjectId(complaintId)}
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
                    commentsCount: {$size: "$comments"},
                }
            },
            {
                $project: {
                    comments: 1,
                    commentsCount: 1,
                }
            }
        ]);

        return res.status(200).json({
            success: true,
            data: comments[0] || { comments: [], commentsCount: 0 },
            message: "All Comments on given complaint are successfully fetched.x"
        });
   } catch (error) {
        return res.status(error.code||500).json({
            success: false,
            message: error.message
        });
   }
}

async function changeComment(req, res, next){
    try {
        /*
            1. coming from auth middleware
            2. check if the user changing comment and the owner of the comment are same
            3. get changed commentText
            4. check if all required data was obtained (validate)
            5. save the changed object in db
            6. return res
        */
    
        const user = req.user;
        const {commentId} = req.params;
        const {updatedCommentText} = req.body;

        if(!commentId){
            return res.status(400).json({
                success: false,
                message: "Couldn't get comment id from params"
            });
        }
    
        const comment = await Comment.findById(commentId);

        if(!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            });
        }
    
        if(comment.user.toString()!==user._id.toString()){
            return res.status(403).json({
                success: false,
                message: "User do not have permission to change this comment"
            });
        }

        if(!updatedCommentText?.trim()){
            return res.status(400).json({
                success: false,
                message: "Couldn't get the updated Comment Text"
            });
        }
    
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId, 
            { $set: {commentText: updatedCommentText} },
            {new: true, runValidators: true}
        );
    
        return res.status(200).json({
            success: true,
            data: updatedComment,
            message: "Comment updated successfully"
        });
    } catch (error) {
        return res.status(error.code||500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteComment(req, res, next){
    try {
        /*
            1. coming from auth middleware
            2. check if the user changing comment and the owner of the comment are same
            3. validate everything
            4. delete comment
        */
    
        const user = req.user;
        const {commentId} = req.params;
    
        if(!commentId){
            return res.status(400).json({
                success: false,
                message: "Couldn't get comment id from params"
            });
        }
    
        const comment = await Comment.findById(commentId);

        if(!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            });
        }
    
        if(comment.user.toString()!==user._id.toString()){
            return res.status(403).json({
                success: false,
                message: "User do not have permission to delete this comment"
            });
        }
    
        await Comment.findByIdAndDelete(commentId);
    
        return res.status(200).json({
            success: true,
            message: "Comment deleted successfully"
        });
    } catch (error) {
        return res.status(error.code||500).json({
            success: false,
            message: error.message
        });
    }
}

export {
    postComment,
    getAllComments,
    changeComment,
    deleteComment
}