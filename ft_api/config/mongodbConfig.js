import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;
console.log(process.env.MONGO_URL);
import dotenv from "dotenv";
dotenv.config();
export const conMongoDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
