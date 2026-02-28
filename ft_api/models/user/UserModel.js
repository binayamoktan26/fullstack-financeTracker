import UserSchema from "./UserSchema.js";

// C create
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
// R read
export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};
// U update

// D delete
