import express from "express";
import { newPost } from "../controllers/Post.controller";

export const postRouter = express.Router();

postRouter.route("/create").post(newPost);
