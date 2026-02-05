import mongoose from "mongoose";
const MONGO_URL = "mongodb://127.0.0.1:27017/finance_tracker";
export const conMongoDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
