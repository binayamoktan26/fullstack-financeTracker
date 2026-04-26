import TransactionSchema from "./TransactionSchema";

// c insert   
export const insertTransaction=(obj)=>{
   return TransactionSchema(obj).save();
}


// r read 

// U update  




// D delete 