import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js";

async function authMiddleware(req, res, next){
    // either get token from cookie or from header as Authorization: Bearer <token>
    const token = req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Token not found. Please login first"
        });
    }

    const decodedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedUser?._id).select("-password -refreshToken");

    if(!user){
        res.status(401).json({
            success: false,
            message: "Invalid Token, User not found."
        });
    }

    req.user = user;
    next();
}

export {authMiddleware}