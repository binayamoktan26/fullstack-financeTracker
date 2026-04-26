import express from "express";
import { auth } from "../middlewares/AuthMiddleware.js";
import { insertTransaction } from "../models/transaction/TransactionModel.js";

const router = express.Router();

// post transaction 

router.post ("/", async  (req,res)=>{
    try {
        const {_id} = req.userInfo
        req.body.userId = _id
        // console.log(req.body)
        const result = await insertTransaction(req.body)
        // console.log(result)
        console.log(result)
        result?._id? res.json({
            status : "success",
            message : " New transaction created successfully" 
}): res.json({
            status : "error",
            message : " unaable to add new transaction , try again later "
})
    } catch (error) {
        console.log(error)
    }
})

 







export default router;

