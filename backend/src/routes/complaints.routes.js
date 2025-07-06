import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { deleteComplaint, getFilteredComplaints, getComplaintById, postComplaint, updateComplaint } from "../controllers/complaints.controllers.js";

const complaintsRouter = Router();

complaintsRouter.route('/')
    .post(authMiddleware, upload.single('complaintImage'), postComplaint)
    .get(getFilteredComplaints)

complaintsRouter.route('/:id')
    .get(getComplaintById)
    .patch(authMiddleware, updateComplaint)
    .delete(authMiddleware, deleteComplaint)

export default complaintsRouter;