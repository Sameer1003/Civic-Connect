import dotenv from "dotenv"
dotenv.config();

import app from "./app.js"
import connectDB from "./db/index.js";


connectDB()
    .then(()=>{
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, ()=>{
            console.log(`Server started at port ${PORT}`);
        })
    })
    .catch((err)=>{
        console.log("Database Connection Failed", err)
    })

