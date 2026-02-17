import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcryptjs.js";

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

// userProfile

export default router;
