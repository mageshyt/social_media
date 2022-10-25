import { supabase } from "./../src/app";

import e, { Request, Response } from "express";

export const newPost = async (req: Request, res: Response) => {
  //! get title and image
  const { postText, image, AuthorDetail } = req.body;

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
    .from("post_table")
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
    .from("post_table")
    .select()
    .order("created_at", { ascending: false })
    .then(({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });
      //! if data
      res.status(200).send({ message: "Posts fetched successfully", data });
    });
};

//! like post
export const likePost = async (req: Request, res: Response) => {
  const { post_id, user_id } = req.body;
  if (!supabase)
    return res.status(400).send({ message: "supabase not connected" });

  //! get the likes array from the post then check user liked or not
  let likes: any = [];
  likes = await supabase
    .from("post_table")
    .select("post_like")
    .eq("id", post_id)
    .then(({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });
      //! if data
      console.log("data", data);
      return data[0];
    });

  //! if this was the first like
  if (likes.post_like === null) {
    return await supabase
      .from("post_table")
      .update({
        post_like: [
          {
            user: user_id,
          },
        ],
        //! increment the likes count
        likesCount: 1,
      })
      .eq("id", post_id)
      .then(({ data, error }) => {
        //! if any error
        if (error) return res.status(400).send({ message: error.message });
        //! if data
        res
          .status(200)
          .send({ message: "Post liked successfully", status: 200 });
      });
  }

  //! if user liked then remove the user from the array
  // const isLiked = likes.find((like: { user: any }) => like.user === user_id);
  let isLiked: any[] = [];
  if (likes.post_like !== null) {
    isLiked = likes.post_like.filter((likedUser: any) => {
      if (likedUser.user === user_id) {
        console.log("user found");
        return likedUser;
      }
    });
  }

  console.log("isLiked", isLiked);

  //! if user not liked then add the user to the array
  if (isLiked.length === 0) {
    //! increase the likes count
    // supabase
    //   .from("Posts_duplicate")
    //   .update({ likesCount: 10 })
    //   .eq("id", post_id);

    return await supabase
      .from("post_table")
      .update({
        post_like: [...likes.post_like, { user: user_id }],
        likesCount: likes.post_like.length + 1,
      })
      .eq("id", post_id)
      .then(({ data, error }) => {
        //! if any error
        if (error) return res.status(400).send({ message: error.message });
        //! if data
        res
          .status(200)
          .send({ message: "Post liked successfully", status: 200 });
      });
  }
  //! else return use liked the post
  else res.send({ message: "user already liked the post" });
};

//! add comment

export const addComment = async (req: Request, res: Response) => {
  const { comment, post_id, user } = req.body;
  if (!supabase)
    return res.status(400).send({ message: "supabase not connected" });
  const created_at = new Date().toISOString();
  let All_comments: any = [];
  All_comments = await supabase
    .from("post_table")
    .select("comments")
    .eq("id", post_id)
    .then(({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });
      //! if data
      console.log("data", data);
      return data[0];
    });

  //! for the first comment
  if (All_comments.comments === null) {
    return await supabase

      .from("post_table")
      .update({
        comments: [
          {
            comment,
            user,
            created_at,
          },
        ],
        //! increment the comments count
        commentsCount: 1,
      })
      .eq("id", post_id)
      .then(({ data, error }) => {
        //! if any error
        if (error) return res.status(400).send({ message: error.message });
        //! if data
        res
          .status(200)
          .send({ message: "Comment added successfully", status: 200 });
      });
  }

  //! add the comment
  await supabase
    .from("post_table")
    .update({
      comments: [
        ...All_comments.comments,
        {
          comment,
          user,
          created_at,
        },
      ],
      commentsCount: All_comments.comments.length + 1,
    })
    .eq("id", post_id)
    .select()
    .then(({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });
      //! if data
      res
        .status(200)
        .send({ message: "Comment added successfully", status: 200 });
    });
};
