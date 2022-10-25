import express from "express";
import { addComment, getAllPosts, likePost, newPost } from "../controllers/Post.controller";
import { isLoggined } from "../middlewares/isAuth.middleware";

export const postRouter = express.Router();

postRouter.route("/create").post(isLoggined, newPost);

postRouter.route("/all").get(getAllPosts);

postRouter.route("/like").post(isLoggined, likePost);

postRouter.route("/comment").post(isLoggined, addComment);
