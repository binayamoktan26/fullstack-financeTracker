import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useUser } from "../context/UserContex"; 
import { DashboardChart } from "../../components/DashboardChart";
const Dashboard = () => {
  const {transaction , getTransaction } = useUser()
  useEffect(()=>{
    getTransaction()
  },[])
  return (
    <Container className="p-5">
      <Row className=" bg-dark p-5 rounded">
        <Col md={6}>
          <h2>DashBoard</h2>
        </Col>
        <hr/>
        <DashboardChart />
      </Row>
    </Container>
  );
};
export default Dashboard;
