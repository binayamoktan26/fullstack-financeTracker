import express from "express"
const router = express.router()


// insert transaction 

router.post("/", (req,res)=>{
    try {
        console.log(req.body)
        res.json({
            status : "success",
            message: "todo inserted successfully",
        })
        
    } catch (error) {
        console.log(error)
    }
})






export default router