import { supabase } from "./../src/app";
import jwt, { sign } from "jsonwebtoken";
import { Request, Response } from "express";
import { getCookies } from "../utils/auth.utils";
import { v4 as uuid } from "uuid";
import { app, db, storage } from "../firebase";
import { ref, uploadBytes, listAll, deleteObject } from "firebase/storage";

var fs = require("fs");
export const newPost = async (req: Request, res: Response) => {
  //! get title and image
  const { title } = req.body;
  const image = req.files?.image as any;
  // save the image to local storage
  const imageName = uuid() + image.name;

  const token = getCookies(req, res);

  if (!token) {
    return res.status(400).send({ message: "User not logged in" });
  }
  const decoded: any = jwt.verify(
    token as string,
    process.env.JWT_SECRET as string
  );

  const { userId } = decoded;

  //    post the image in supabase storage
  if (!supabase)
    return res.status(400).send({ message: "supabase not connected" });

  console.log("userId", userId);

  //! uplaod to firebase
  const storageRef = ref(storage, `images/${imageName}`);
  const uploadTask = uploadBytes(storageRef, image.buffer);
  uploadTask.then((snapshot) => {
    console.log("Uploaded a blob or file!");
    res.send({ message: "uploaded" });
  });

  // upload the image to supabase storage
  //   let { error: uploadError, data } = await supabase.storage
  //     .from("images")
  //     .upload(fileName, image.data);

  //   if (uploadError) {
  //     console.log("uploadError", uploadError);
  //     res.status(400).send({ message: "Error uploading image" });
  //   } else {
  //     console.log("data", data);
  //     res.status(200).send({ message: "Image uploaded successfully" });
  //   }
};
