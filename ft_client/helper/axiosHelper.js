import axios from "axios";
import { data } from "react-router-dom";
const rootApiEP = "http://localhost:8000/api/v1";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log(data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// Post New User
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/users",
    data,
  };
  return apiProcessor(obj);
};
//login user
export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/users/login",
    data,
  };
  return apiProcessor(obj);
};
