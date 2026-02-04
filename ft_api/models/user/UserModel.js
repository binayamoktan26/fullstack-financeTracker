import UserSchema from "./UserSchema.js";

// C
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
// U
// R
// D
