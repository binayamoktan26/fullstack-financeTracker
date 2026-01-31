import express from "express";

const app = express();
const PORT = process.env.PORT || 8000


app.get("/",(req,res)=>{
    res.json(
        {
            message:"hello world"
        }
    )
})



app.listen(PORT,error =>{
    error ? console.log(error):
    console.log(`server run at  http://localhost:${PORT}`)
})