import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { hashPassword, comparePassword } from "../utils/bcryptjs.js";
import { signjWT } from "../utils/jwt.js";
import { auth } from "../middlewares/AuthMiddleware.js";

const router = express.Router();
// user signUp
router.post("/", async (req, res, next) => {
  try {
    // get the use Object
    req.body.password = hashPassword(req.body.password);
    console.log(req.body.password);
    // // data varification encrypt the password
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been created , you may login now ",
        })
      : res.json({
          status: "error",
          message: "Error creating user . Please try again later",
        });
  } catch (error) {
    let msg = error.message;
    if (msg.includes("E11000 duplicate key error collection")) {
      msg =
        " There is another user have used this email, try to login or use different email to signup ! ";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});
// user logIN
router.post("/login", async (req, res, next) => {
  try {
    // 1. receive the email and password
    const { email, password } = req.body;
    console.log(email, password);
    if (email && password) {
      // 2. find the user by email
      const user = await getUserByEmail(email);
      if (user?._id) {
        // 3. match the password
        const isMatched = comparePassword(password, user.password);
        if (isMatched) {
          // 4. jwt and store the jwt in db then return the user OP with jwt token
          const accessJWT = signjWT({
            email: email,
          });
          user.password = undefined;
          res.json({
            status: "success",
            message: " Logged in successfully ",
            user,
            accessJWT,
          });
          return;
        } 
      }
    }
    res.status(401).json({
      error: "invalid email or password",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// userProfile from the accessJWT 
router.get("/",auth ,(req,res,next)=>{
 try {
   
    const user = req.userInfo;
     user.password=undefined
    return res.json({
      status : "success",
      message : " here is the user profile",
      user
    })
 } catch (error) {
    res.status(500).json({
      error: error.message,
    });
 }
})
export default router;
