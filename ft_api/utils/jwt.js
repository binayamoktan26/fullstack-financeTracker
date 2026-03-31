import jwt from "jsonwebtoken";

export const signjWT = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_SECRET, { expiresIn: "7d" });
  // store in the database 
  return token;
};


export const verifyJWT =(token)=>{
try {
  return jwt.verify(token, process.env.JWT_SECRET)
} catch (error) {
  console.log(error.message)
}
}