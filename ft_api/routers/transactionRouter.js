import express from "express";
import { auth } from "../middlewares/AuthMiddleware.js";
import {
  getTransaction,
  insertTransaction,
  deleteTransaction,
} from "../models/transaction/TransactionModel.js";

const router = express.Router();

// post transaction

router.post("/", async (req, res,next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userId = _id;
    // console.log(req.body)
    const result = await insertTransaction(req.body);
    // console.log(result)
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: " New transaction created successfully",
        })
      : res.json({
          status: "error",
          message: " unable to add new transaction , try again later ",
        });
  } catch (error) {
   next(error);
   
  }
});

// return all the transaction for the specfic user

router.get("/", auth, async (req, res,next) => {
  try {
    const { _id } = req.userInfo;
    const transaction = (await getTransaction(_id)) || [];

    res.json({
      status: "success",
      message: "transaction fetched successfully",
      transaction,
    });
  } catch (error) {
    console.log(error);
   next(error);
  }
});

// delete transaction

router.delete("/", async (req, res,next) => {
  try {
    // receive the ids [] and _id of user
    const ids = req.body;
    const { _id } = req.userInfo;
    console.log(ids, _id);

    //perform deletion query
    const result = await deleteTransaction(_id, ids);
   
    //
 

    res.json({
  status: "success",
  message: result.deletedCount + " Transaction deleted successfully",
});
  } catch (error) {
   
   next(error);
  }
});

export default router;
