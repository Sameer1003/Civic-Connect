import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    complaintType: {
        type: String,
        enum: ["Electricity", "Water", "Garbage", "Road", "Drainage", "Others"],
        required: true
    },
    complaintImage: {
        type: String // cloudinary url
    },
    description: {
        type: String,
        required: true,
        minLength: 50
    },
    // location: {
    //     lat: {
    //         type: Number,
    //         required: true
    //     },
    //     lng: {
    //         type: Number,
    //         required: true
    //     },
    //     address: {
    //         type: String,
    //         required: true
    //     }
    // },
    
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },

    complaintStatus: {
        type: String,
        enum: ["pending", "in-progress", "resolved"],
        default: "pending"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    upvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, {timestamps: true});

complaintSchema.index({ location: '2dsphere' });

export const Complaint = mongoose.model("Complaint", complaintSchema);