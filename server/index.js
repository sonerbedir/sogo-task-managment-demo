import express from "express";
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  function (e) {
    if (e) {
      console.log(e);
    } else {
      console.log("Connected to database");
    }
  }
);

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
