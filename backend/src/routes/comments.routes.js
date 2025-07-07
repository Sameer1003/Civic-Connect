import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { changeComment, deleteComment } from "../controllers/comments.controllers.js";

const commentsRouter = Router();

commentsRouter.route('/:id')
    .put(authMiddleware, changeComment)
    .delete(authMiddleware, deleteComment)

export default commentsRouter;