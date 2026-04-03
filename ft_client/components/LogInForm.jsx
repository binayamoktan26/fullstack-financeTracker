import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../helper/axiosHelper";
import useForm from "../src/hooks/useForm";
import { useUser } from "../src/context/UserContex";
import { useNavigate } from "react-router-dom";

export const LogInForm = () => {
  const navigate = useNavigate()
    const {user,setUser}=useUser() 
  useEffect(()=>{
    user?._id && navigate("/dashboard")
  },[user?._id,navigate])  

  const initalState = {
    email: "",
    password: "",
  };
  // const [form, setForm] = useState({});
  const { form, handleOnChange } = useForm(initalState);

  const fields = [
    {
      label: "Email",
      placeholder: "hello@example.com",
      require: true,
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "********",
      require: true,
      type: "password",
      name: "password",
    },
  ];

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   // console.log(name, value);
  //   setForm({ ...form, [name]: value });
  // };
  const handleOnSubmit = async (e) => {
    // console.log(e);
    e.preventDefault();
    console.log(form);
    const pendingRes = loginUser(form);
    toast.promise(pendingRes, {
      pending: "Please wait ....", 
    
    }); 
    const { status, message, user, accessJWT } = await pendingRes;
    toast[status](message);
    console.log(user, accessJWT);
    setUser(user)
    localStorage.setItem("accessJWT",accessJWT)
    // localStorage.setItem("userinfo",JSON.stringify (user))

  };
  console.log(user)
  return (
    <div className="border rounded p-4">
      <h3 className="mb-3">Sign In Now !</h3>
      <Form>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          {" "}
          <Button variant="primary" type="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
