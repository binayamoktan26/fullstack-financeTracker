import express from "express";
import { auth } from "../middlewares/AuthMiddleware.js";
import { getTransaction, insertTransaction } from "../models/transaction/TransactionModel.js";

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
        res.json({
            status: "error",
            message:"error.message"
        })
    }
})

 
// return all the transaction for the specfic user 

router.get("/", async(req,res)=>{
    try {
    const {_id} = req.userInfo
    const transaction = await getTransaction(_id) || []

    res.json({
        status: "success",
        message: "transaction fetched successfully",
        transaction
    })
    
} catch (error) {
    console.log(error)
        res.json({
            status: "error",
            message:"error.message"
        })
}
})




export default router;

 