import express from "express";
import { getAllPosts, newPost } from "../controllers/Post.controller";

export const postRouter = express.Router();

postRouter.route("/create").post(newPost);

postRouter.route("/all").get(getAllPosts);
