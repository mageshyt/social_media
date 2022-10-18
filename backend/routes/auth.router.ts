import express from "express";
import { signUp, singIn } from "../controllers/Auth.controller";

const AuthRouter = express.Router();

AuthRouter.route("/signup").post(signUp);

AuthRouter.route("/signin").post(singIn);

export default AuthRouter;
