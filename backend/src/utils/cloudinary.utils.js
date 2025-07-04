import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// configuration

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// upload function

const uploadOnCloudinary = async function(localFilePath){
    try {
        if(!localFilePath){
            return null;
        }
        const uploadResult = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto"
            }
        )

        // unlink if successfully uploaded
        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
        }

        return uploadResult;
        
    } catch (error) {
        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
        }
        console.error("Cloudinary Upload Error:", error);
        return null;
    }
}

export { uploadOnCloudinary }