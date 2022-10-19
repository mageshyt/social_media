import { supabase } from "../src/app";
import jwt from "jsonwebtoken";
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
  return jwt.sign({ userId }, "thisissecreat", {
    expiresIn: "1d",
  });
};

export const verifyToken = (userId: string) => {
  return jwt.verify(userId, "thisissecreat");
};

export const cookiesToToken = (userId: string) => {
  const token = getJwtToken(userId);
  return token;
};
