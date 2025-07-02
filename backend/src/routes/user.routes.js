import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { deleteUser, getUserDetails, updateUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.route("/me")
    .get(authMiddleware, getUserDetails)
    .delete(authMiddleware, deleteUser)
    .put(authMiddleware, updateUser)


export default userRouter