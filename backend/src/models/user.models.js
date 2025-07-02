import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    cityorvillage: {
        type: String,
        required: true
    },
    myComplaints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint"
    }],
    refreshToken: {
        type: String
    }
}, {timestamps: true});

/************************************* PASSWORD HASHING ***************************************/
// Using mongoose pre hook
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

/********************************** INJECTING CUSTOM METHODS TO SCHEMA (because we can manipulate javscript objects) *****************/
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

/************************************* TOKEN GENERATION *****************************************/
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);