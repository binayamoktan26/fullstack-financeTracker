import React from "react";
import { Navigate } from "react-router-dom";
export const Auth = ({ children }) => {
  const isloggedIn = false;
  console.log(isloggedIn);
  return isloggedIn ? children : <Navigate to="/" replace />;
};
