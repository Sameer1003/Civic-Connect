import { User } from "../models/user.models.js";

async function getUserDetails(req, res, next){
    try {
        /*
            1. we'll be coming from auth middleware which adds user to the req
            2. check if user if present or not.
            3. send user details as json
        */
    
        const user = req.user;
    
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    
        return res.status(200).json({
            success: true,
            data: user,
            message: "User details fetched successfully"
        });

    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteUser(req, res, next){
    try {
        /*
            1. will be coming from authmiddleware
            2. find the user in db
            3. delete user
            4. clear cookies
        */
    
        const user = req.user;
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    
        await User.findByIdAndDelete(user._id);
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json({
                success: true,
                message: "User deleted successfully"
            });
    } catch (error) {
        return res.satus(error.code).json({
            success: false,
            message: error.message
        });
    }
}

async function updateUser(req, res, next){
    try {
        /*
            1. coming from authmiddleware. get user from request
            2. define modifiable fields
            3. take those fields from req.body that are in modifiable fields
            4. check if a modifiable field was unique. if es, then explicitly check if an entry with this value exists
            5. findbyidandupdate... update user while selecting appropiate options
        */
    
        const user = req.user;
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    
        const updatedDetails = req.body;
        const modifiableFields = ["username", "password", "mobileNumber", "state", "district", "cityorvillage"];
        const finalDetails = {}
    
        for(const field of modifiableFields){
            if(updatedDetails[field]){
                finalDetails[field] = updatedDetails[field];
            }
        }
    
        if(finalDetails["username"]){
            const existingUsername = await User.findOne({username: finalDetails["username"]});
            if(existingUsername && existingUsername._id.toString() !== user._id.toString()){
                /*
                existingUsername._id.toString() !== user._id.toString()
                    When a user updates their details (including possibly their username), we check if that username is already taken by another user. But there's a catch:
                    If the user doesn't change the username, it will still match an existing user - themselves.
                */
                return res.status(409).json({
                    success: false,
                    message: "Username already exists"
                });
            }
        }
    
        if(finalDetails["mobileNumber"]){
            const existingMobileNumber = await User.findOne({mobileNumber: finalDetails["mobileNumber"]});
            if(existingMobileNumber && existingMobileNumber._id.toString() !== user._id.toString()){
                return res.status(409).json({
                    success: false,
                    message: "Mobile Number already exists"
                });
            }
        }
    
        const updatedUser = await User.findByIdAndUpdate(
            user._id, 
            { $set: finalDetails },
            { 
                new: true, // returns updated document
                runValidators: true, // runs the validations written in the schema
                timestamps: true, // timestamps are updated if enabled in schema
            }
        ).select("-password -refreshToken");
    
        return res.status(200).json({
            success: true,
            data: updatedUser,
            message: "User details updated successfully"
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

export { getUserDetails , deleteUser , updateUser };