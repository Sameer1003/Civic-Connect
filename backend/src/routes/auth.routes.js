import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authLogin, authLogout, authRegister, refreshAccessToken } from "../controllers/authRegister.controllers.js";

const authRouter = Router();

authRouter.route('/signup').post(authRegister);
authRouter.route('/login').post(authLogin);

// secured Routes
authRouter.route('/logout').post(authMiddleware, authLogout);
authRouter.route('/refresh-token').post(refreshAccessToken); // this route will not be called upon user actions... we'll call this by ourselves when necessary

export default authRouter;