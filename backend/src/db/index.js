import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`\n MONGODB CONNECTED !!! Connection Instance DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`MONGODB CONNECTION ERROR ${error}`);
        throw error;
    }
}

export default connectDB;