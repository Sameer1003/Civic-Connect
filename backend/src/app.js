import express from "express"
import cookieParser from "cookie-parser"

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import complaintsRouter from "./routes/complaints.routes.js";
import commentsRouter from "./routes/comments.routes.js";

const app = express();


app.use(express.json()); // to allow accepting json
app.use(cookieParser()); // to allow access to cookies
app.use(express.urlencoded({extended: true})); // to allow data through url encoded forms (will help in postman)

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/complaints', complaintsRouter);
app.use('/api/v1/comments', commentsRouter)


export default app;