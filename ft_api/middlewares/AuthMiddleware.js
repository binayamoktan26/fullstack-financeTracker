import { getSalt } from "bcryptjs";
import { verifyJWT } from "../utils/jwt.js";
import { getUserByEmail } from "../models/user/UserModel.js";

export const auth = async (req,res,next)=>{
    try {
  // -valid if the token is validatecd 
        const {authorization} =req.headers
        if (!authorization) {
      return res.status(401).json({ status: "error", message: "No token provided" });
    }
     const result = verifyJWT(authorization)

    // - get user Email from the token
    if(result?.email){
        const user = await getUserByEmail(result.email)
        if(user?._id){
            //user Authorized
            //store user in the req,header
            user.password=undefined
            req.userInfo = user 
            return next()
        }
        return res.status(401).json({ status: "error", message: "Unauthorized user" });
    }
   
    } catch (error) {
       return  res.status(500).json({
      error: error.message,
    })
        
    }
}
