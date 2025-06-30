import express from "express"
import cookieParser from "cookie-parser"

const app = express();


app.use(express.json()); // to allow accepting json
app.use(cookieParser()); // to allow access to cookies
app.use(express.urlencoded({extended: true})); // to allow data through url encoded forms (will help in postman)

app.get('/', (req, res)=>{
    res.send("Hello World");
})


export default app;