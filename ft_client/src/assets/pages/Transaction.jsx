import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Transaction = () => {
  return (
    <Container className="p-5">
      <Row className=" bg-dark p-5 rounded">
        <Col md={6}>Todo transaction</Col>
      </Row>
    </Container>
  );
};
export default Transaction;
