import { User } from "../models/user.models.js";

import jwt from "jsonwebtoken";

function generateAccessAndRefreshTokens(user){
    try {
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        
        // objects are passed by reference in JS
        user.refreshToken = refreshToken;

        return {accessToken, refreshToken};
    } catch (error) {
        throw new Error(`Token generation failed ${error}`);
    }
}

async function authRegister(req, res, next){
    try {
        /*
            1. get username, firstName, middleName, lastName, email, password, mobileNumber, state, district, ctiyorvillage
            2. check if all the required fields are present or not.
            3. check if user is already registered.(using email and mobile number)
            4. check if the username is unique or not.
            5. create an entry in db if everything was ok.
            6. verify if entry was successfully created.
            7. return response without password and refreshToken
        */
    
        const {username, firstName, middleName, lastName, email, password, mobileNumber, state, district, cityorvillage} = req.body;
    
        if(!username || !firstName || !email || !password || !mobileNumber || !state || !district || cityorvillage){
            // 400- bad request
            return res.status(400).json({
                success: false,
                message: "Required Fields are empty"
            });
        }
    
        // const existingEmail = await User.findOne({email});
        // const existingMobileNumber = await User.findOne({mobileNumber});
    
        const existingUser = await User.findOne({
            $or: [{email}, {mobileNumber}]
        });
    
        if(existingUser){
            // 409- conflict
            return res.status(409).json({
                success: false,
                message: "User already exists. Please try a different email or mobile number"
            });
        }
    
        const existingUsername = await User.findOne({username});
        
        if(existingUsername){
            // 409- conflict
            return res.status(409).json({
                success: false,
                message: "Username already exists"
            });
        }
    
        const user = await User.create({
            username: username,
            firstName: firstName,
            middleName: middleName || null,
            lastName: lastName || null,
            email: email,
            password: password,
            mobileNumber: mobileNumber,
            state: state,
            district: district,
            cityorvillage: cityorvillage,
        });
    
        const userEntry = await User.findById(user._id).select("-password -refreshToken");
        if(!userEntry){
            // 500- internal server error
            return res.status(500).json({
                success: false,
                message: "Unable to create user. Please try again"
            });
        }
    
        // 201- created
        return res.status(201).json({
            success: true,
            data: userEntry,
            message: "Successfully created user"
        });
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }

}

async function authLogin(req, res, next){
    try {
        /*
            1. get username, email, mobileNumber and password from req
            2. check if none of username, email, mobileNumber is present
            3. check if password field is emtpy
            4. check if user actually exists
            5. check if password is actually correct or not
            6. if everything is fine then generate Access and Refresh tokens and save in cookies.
            7. return user without password and refreshToken
        */
    
        const {username, email, mobileNumber, password} = req.body;
    
        if( !(username || email || mobileNumber) || !password ){
            return res.status(400).json({
                success: false,
                message: "Required fields cannot be empty"
            })
        }
    
        const user = await User.findOne({
            $or: [{username}, {email}, {mobileNumber}]
        })
    
        if(!user){
            return res.status(404).json({
                success: false,
                message: "Cannot find user. Please register first."
            });
        }
    
        const passwordCorrect = await user.isPasswordCorrect(password);
    
        if(!passwordCorrect){
            // 401- unauthorized
            return res.status(401).json({
                success: false,
                message: "Invalid user credentials"
            });
        }
    
        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user);
        await user.save();
    
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
        
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json({
                success: true,
                data: loggedInUser,
                message: "Logged In successfully"
            });

    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

async function authLogout(req, res, next){
    try {
        /*
            1. we will already be coming from authMiddleware. so we will have user in req
            2. find user in db
            3. set refreshToken to null and save user
            4. clear cookies
            5. return res
        */
    
        const user = await User.findById(req.user._id);
        
        user.refreshToken = null;
        await user.save();
    
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
                message: "User Logged out successfully"
            });
        
    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }

}   

async function refreshAccessToken(req, res, next){
    try {
        /*
            1. find refresh token in cookies or body.
            2. get decoded token
            3. find user in db
            4. match that refreshtoken with the one saved in database
            5. generate new access and refresh tokens
            6. save in db
            7. set cookies
        */
    
        const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;
    
        if(!incomingRefreshToken){
            return res.status(401).json({
                success: false,
                message: "Refresh Token not found"
            });
        }
        
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid Refresh Token"
            });
        }
    
        if(incomingRefreshToken !== user.refreshToken){
            return res.status(401).json({
                success: false,
                message: "Refresh Token is expired"
            })
        }
    
        const {accessToken, refreshToken: newRefreshToken} = generateAccessAndRefreshTokens(user);
    
        await user.save();
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json({
                success: true,
                message: "Tokens Refreshed successfully"
            });

    } catch (error) {
        return res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }

}

export {authRegister, authLogin, authLogout, refreshAccessToken};