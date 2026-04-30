import TransactionSchema from "./TransactionSchema.js";
import mongoose from "mongoose"
// c insert   
export const insertTransaction=(obj)=>{
   return TransactionSchema(obj).save();
}


// r read 

// U update  




// D delete 