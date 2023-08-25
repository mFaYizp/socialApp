import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";

const app = express();

const MONGO_URL = "mongodb+srv://Fayiz:fa786678@cluster0.wzcsy5e.mongodb.net/memories?retryWrites=true&w=majority"
const PORT = 4000;


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));