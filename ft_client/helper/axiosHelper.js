import axios from "axios";
import { data } from "react-router-dom";
const rootApiEP = "http://localhost:8000/api/v1";


const getAccessJWT=()=>{
  return localStorage.getItem("accessJWT")
  
}
console.log(getAccessJWT())
const apiProcessor = async ({ method, url, data ,headers}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,  
    });

    return response.data;
  } catch (error) {
    console.log(error); 
    return {
      status: "error",
      message: error?.response?.data?.error || error.message,
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
//getUser  Profile 
export const getUser = () => {
  const obj = {
    method: "get",
    url: rootApiEP + "/users",
    headers:{
    Authorization: getAccessJWT(),
    // Authorization: "Bearer " + getAccessJWT()

    },
  };

  return apiProcessor(obj);
};
 

// Post New transaction data 
 export const postNewTransaction= (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/transactions",
    data,
      headers:{
    Authorization: getAccessJWT(),
    // Authorization: "Bearer " + getAccessJWT()

    }
  };
  return apiProcessor(obj); 
};


// fetch transaction for specific user
 export const fetchTransaction= () => {
  const obj = {
    method: "get",
    url: rootApiEP + "/transactions",
    
      headers:{
    Authorization: getAccessJWT(),
    // Authorization: "Bearer " + getAccessJWT()

    }
  };
  return apiProcessor(obj); 
};