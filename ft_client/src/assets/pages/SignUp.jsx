import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SignUpForm } from "../../../components/SignUpForm";
import { FinancialTips } from "../../../components/FinancialTips";
const SignUp = () => {
  return (
    <Container className="p-5">
      <Row className=" bg-dark p-5 rounded">
        <Col>
          <FinancialTips />
        </Col>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
