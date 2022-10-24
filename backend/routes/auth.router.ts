import { getDetail } from "./../controllers/Auth.controller";
import express from "express";
import { GetUserDetail, signUp, singIn } from "../controllers/Auth.controller";
import { isLoggined } from "../middlewares/isAuth.middleware";

const AuthRouter = express.Router();

AuthRouter.route("/signup").post(signUp);

AuthRouter.route("/signin").post(singIn);

AuthRouter.route("/me").get(isLoggined, GetUserDetail);

AuthRouter.route("/user/:uid").get(getDetail);

export default AuthRouter;
