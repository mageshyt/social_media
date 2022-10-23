import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Response } from "express";
import { supabase } from "../src/app";
import { cookiesToToken, getCookies, IsUser_exists } from "../utils/auth.utils";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  receivedPassword: string
) => {
  return await bcrypt.compare(password, receivedPassword);
};

//! signup
export const signUp = async (req: any, res: Response) => {
  const hashedPassword = await hashPassword(req.body.password);
  const { email, password, firstname, lastname } = req.body;
  const user = await supabase?.auth.signUp({
    email,
    password,
  });
  if (user?.error) {
    res.status(400).send(user.error);
  }

  // check if user exists
  const isUserExists: boolean = (await IsUser_exists(email)) as boolean;
  if (isUserExists) {
    return res.status(400).send({ message: "User already exists" });
  }
  await supabase
    ?.from("users")
    .insert([
      {
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname: lastname,
      },
    ])
    .then(({ data, error }) => {
      if (error) {
        res.status(400).send({
          message: "Something went wrong",
        });
      }
      res.status(200).send({
        message: "User created successfully",
      });
    });
};

export const singIn = async (req: any, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ message: "Email or password is missing" });
  await supabase
    ?.from("users")
    .select("*")
    .eq("email", email)
    .then(async ({ data, error }) => {
      //! if any error
      if (error) return res.status(400).send({ message: error.message });

      if (data.length > 0) {
        const user = data[0];
        const validPassword = await comparePassword(password, user.password);
        //! in valid password
        if (!validPassword)
          return res
            .status(200)
            .send({ message: "Invalid email or password", status: "failed" });
        //! set cookie
        const token = cookiesToToken(user.uid);
        console.log("Cookie: " + token);
        const check = res.cookie("token", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        console.log("check", check);

        user.token = token;
        res.status(200).send({
          message: "User logged in successfully",
          data: user,
          status: "success",
        });
      } else {
        res.status(200).send({ message: "user not founded", status: "failed" });
      }
    });
};

export const GetUserDetail = async (req: any, res: Response) => {
  try {
    // using jwt
    let token: any = getCookies(req, res);

    if (!token)
      return res
        .status(200)
        .send({ message: "User not logged in", status: "failed" });

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

    await supabase
      ?.from("users")
      .select("*")
      .eq("uid", decoded.userId as string)
      .then(({ data, error }) => {
        if (error) {
          res.status(400).send({
            message: "Something went wrong",
          });
        }
        if (data) {
          res.status(200).send({
            message: "User detail",
            data: data[0],
          });
        } else {
          res.status(200).send({
            message: "User not found",
          });
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};
