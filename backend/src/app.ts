import express from "express";
import createError from "http-errors";
import morgan from "morgan";
import cors from "cors";
require("dotenv").config();
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import AuthRouter from "../routes/auth.router";
import { postRouter } from "../routes/post.router";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:4200",
    // origin: "*",
    credentials: true,
  })
);
app.use(
  fileUpload({
    limits: {
      fileSize: 10000000, // Around 10MB
    },
    abortOnLimit: true,
  })
);

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

export let supabase: SupabaseClient | undefined;
const connect_to_supabase = async () => {
  supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
  );


  return supabase;
};

app.use("/api", AuthRouter);

app.use("/post", postRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 @ http://localhost:${PORT}`);
  connect_to_supabase();
});
