import TransactionSchema from "./TransactionSchema.js";
import mongoose from "mongoose"
// c insert   
export const insertTransaction=(obj)=>{
   return TransactionSchema(obj).save();
}


// r read 


export const getTransaction =(userId)=>{
   if(!userId){
      throw new Error("userId is required")
   }
   return TransactionSchema.find({userId})  
   // {userId: userId}  Key pani 'userId', value pani variable 'userId'
}

// U update  




// D delete transaction 
export const deleteTransaction =(userId , idsToDelete)=>{
 return TransactionSchema.deleteMany({userId, _id: {$in : idsToDelete}})
}