import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/auth.utils";

export const isLoggined = (req: Request, res: Response, next: NextFunction) => {
  try {
    // using jwt
    let token = req.headers.authorization || req.headers.cookie;

    if (!token || (token.startsWith("Bearer ") && token.length < 20)) {
      return res.status(200).json({ error: "User not logged in" });
    }
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    } else if (token.startsWith("token=")) {
      token = token.split("token=")[1];
    }
    const user = verifyToken(token);
    if (!user) {
      return res.status(200).json({ error: "User not logged in" });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};
