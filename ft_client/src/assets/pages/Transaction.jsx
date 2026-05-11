import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TransactionForm } from "../../../components/TransactionForm";
import { TransactionTable } from "../../../components/TransactionTable";
import { useUser } from "../../context/UserContex";
import { useEffect } from "react";

const Transaction = () => {
  const {getTransaction} = useUser()
  useEffect(()=>{
    getTransaction()
  },[])
  return (
    <Container className="p-5">
      <Row className=" bg-dark p-5 rounded">
        {/* starting transaction  */}
      
        <Col >  
        <TransactionForm />
        <hr />

        <TransactionTable />
        </Col>
      </Row>
    </Container>
  );
};
export default Transaction;
