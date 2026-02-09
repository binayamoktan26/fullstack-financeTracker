import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignUpForm = () => {
  return (
    <div className="border rounded p-4">
      <h3 className="mb-3">Sign Up Now !</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid">
          {" "}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
