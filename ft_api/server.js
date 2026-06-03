import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

//connecting db
import { conMongoDb } from "./config/mongodbConfig.js";
import { errorHandler } from "./middlewares/errorHandlerMiddleware.js";
conMongoDb();

// middleware
app.use(cors());
app.use(express.json());
// api endpoints
import userRouter from "./routers/userRouter.js";
import transactionRouter from "./routers/transactionRouter.js";
import { auth } from "./middlewares/AuthMiddleware.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions", auth, transactionRouter);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

//404 not found

app.use((req, res,next) => {
  const error = new Error("not found");
  error.statusCode = 404;
  next(error);
});
// global error handler
app.use(errorHandler);
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server run at  http://localhost:${PORT}`);
});
