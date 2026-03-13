import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
// import { useState } from "react";
import { toast } from "react-toastify";
import { postNewUser } from "../helper/axiosHelper";
import useForm from "../src/hooks/useForm";
const initalState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm(initalState);
  // const [form, setForm] = useState({});
  const fields = [
    {
      label: "Name",
      placeholder: "",
      require: true,
      type: "text",
      name: "name",
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "hello@example.com",
      require: true,
      type: "email",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "********",
      require: true,
      type: "password",
      name: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      placeholder: "********",
      require: true,
      type: "password",
      name: "confirmPassword",
      value: form.confirmPassword,
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
   
    // check confirm password
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password and confirm password do not match");
    }
    console.log(form);
    const { status, message } = await postNewUser(rest);
    toast[status](message);
    status === "success" && setForm(initalState);
  };
  return (
    <div className="border rounded p-4">
      <h3 className="mb-3">Sign Up Now !</h3>
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
