import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";

const app = express();

const MONGO_URL = "mongodb+srv://faiz35946:fa786678@cluster0.4fei4pn.mongodb.net/?retryWrites=true&w=majority"
const PORT = 4000;

mongoose
  .connect(MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);