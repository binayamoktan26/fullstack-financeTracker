import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LogInForm } from "../../components/LogInForm";

import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
// import { useUser } from "../context/UserContex";
const Login = () => {
//   const data = useUser()
// console.table(data)
  return (
    <Container className="p-5">
      <Row className=" bg-dark p-5 rounded">
        <Col md={6}>
          <LogInForm />
        </Col>
        <Col md={6}>
          <div
            className="d-flex flex-column justify-content-center fs-1"
            style={{ height: "100%" }}
          >
            <div className="text-danger text-decoration-line-through">
              {" "}
              <BsGraphDownArrow />
              Reduce your Expenses
            </div>

            <div className="text-success">
              <BsGraphUpArrow />
              Increase your Income
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
