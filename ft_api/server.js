import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

//connecting db
import { conMongoDb } from "./config/mongodbConfig.js";
conMongoDb();
// console.log(process.env.JWT_SECRET);
// middleware
app.use(cors());
app.use(express.json());
// api endpoints
import userRouter from "./routers/userRouter.js";
import transcationRouter from "./routers/transactionRouter.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/transaction", transcationRouter);


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
