import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = 4000 || process.env.PORT;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
