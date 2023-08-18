import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import postRouter from "./routes/posts.js";

const app = express();

app.use("/post", postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 4000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
