export const errorHandler =((error ,req,res,next)=>{
    //set default error code and message
 const statusCode = error.statusCode || 500;
 const message = error.message || "internal server error";
 res.status(statusCode).json({
    status: "error",
    message,
 })
})