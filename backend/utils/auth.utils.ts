import { supabase } from "../src/app";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
export const IsUser_exists = async (email: string) => {
  const res = await supabase
    ?.from("users")
    .select("*")
    .eq("email", email)
    .then(({ data, error }) => {
      console.log("data", data);
      if (error) {
        return false;
      }
      if (data.length > 0) {
        return true;
      }
      return false;
    });
  return res;
};

export const getJwtToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
};

export const verifyToken = (userId: string) => {
  return jwt.verify(userId, process.env.JWT_SECRET as string);
};

export const cookiesToToken = (userId: string) => {
  const token = getJwtToken(userId);
  return token;
};


export const getCookies=(req:Request,res:Response)=>{
   
    // using jwt
    let token = req.headers.authorization || req.headers.cookie;


    if (!token || (token.startsWith("Bearer ") && token.length < 20)) {
      return res.status(200).json({ error: "User not logged in" });
    }
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }
    else if (token.startsWith("token=")) {
      token = token.split("token=")[1];
    }

    return token;

}
