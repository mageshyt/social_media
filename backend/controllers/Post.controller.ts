import { supabase } from "./../src/app";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { getCookies } from "../utils/auth.utils";
import { v4 as uuid } from "uuid";

export const newPost = async (req: Request, res: Response) => {
  //! get title and image
  const { postText, image, AuthorDetail } = req.body;

  // const token = getCookies(req, res);
  // console.log("token", token);
  // if (!token) {
  //   return res.status(400).send({ message: "User not logged in" });
  // }
  // const decoded: any = jwt.verify(
  //   token as string,
  //   process.env.JWT_SECRET as string
  // );

  // const { userId } = decoded;

  //    post the image in supabase storage
  if (!supabase)
    return res.status(400).send({ message: "supabase not connected" });

  //! post asset
  const asset = {
    postImage: image,
  };
  //! update the post in supabase
  console.log({ AuthorDetail, postText, asset });
  await supabase
    .from("Posts")
    .insert([
      {
        postText,
        postAsset: asset,
        AuthorDetail: AuthorDetail,
      },
    ])
    .select()
    .then(({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });
      //! if data
      res.status(200).send({ message: "Post created successfully", data });
    });
};

export const getAllPosts = async (req: Request, res: Response) => {
  if (!supabase)
    return res.status(400).send({ message: "supabase not connected" });
  // ! sort by  created_at

  await supabase
    .from("Posts")
    .select()
    .order("created_at", { ascending: false })
    .then(({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });
      //! if data
      res.status(200).send({ message: "Posts fetched successfully", data });
    });
};
