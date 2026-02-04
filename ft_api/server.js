import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

//connecting db
import { conMongoDb } from "./config/mongodbConfig.js";
conMongoDb;

// middleware

app.use(express.json());
// api endpoints
import userRouter from "./routers/userRouter.js";

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server run at  http://localhost:${PORT}`);
});
