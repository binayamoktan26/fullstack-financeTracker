import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { postNewUser } from "../helper/axiosHelper";

export const LogInForm = () => {
  const [form, setForm] = useState({});
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    // console.log(e);
    e.preventDefault();
    console.log(form);
  };
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
