import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    complaint: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    commentText: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Comment = mongoose.model("Comment", commentSchema);