import express from "express";
import { auth } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// post transaction 

router.post ("/", (req,res)=>{
    try {
        const {_id} = req.userInfo
        req.body.userId = _id
        console.log(req.body)
        res.json({
            status : "success",
            message : "transaction created successfully"  

        })
        
    } catch (error) {
        console.log(error)
    }
})









export default router;

