import jwt from "jsonwebtoken";

export const signjWT = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_SECRET, { expiresIn: "1d" });
  // store in the database 
  return token;
};
