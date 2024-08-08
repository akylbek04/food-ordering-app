import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("DB connected"));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", MyUserRoute);

app.listen(3000, () => console.log("Successfully runs on localhost:3000"));
