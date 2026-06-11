import React from "react";
import { useState ,useEffect } from "react";
import { useUser } from "../src/context/UserContex";
import { Row, Col } from "react-bootstrap";
import { CustomKPI } from "./CustomKPI";
import balanceIcon from "../src/assets/balance.png";
import incomeIcon from "../src/assets/income.png";
import expenseIcon from "../src/assets/expense.png";
import {formatChartData} from "../helper/chartDataHelper.js"
import DoughnutChart from "./chart/DoughnutChart.jsx"
import LineChart from "./chart/LineChart.jsx"
import BarChart from "./chart/BarChart.jsx"
export const DashboardChart = () => {
  const { transaction, getTransaction } = useUser();
  const [dashboardData, setDashboardData] = useState(formatChartData([]));
    useEffect(() => {
    const recordsToShow = 10;

    setDashboardData(formatChartData(transaction.slice(-1 * recordsToShow)));
  }, [transaction]);
  return (
    <>
     <Row>
        <Col md={12}>
     
          <Row className="">
            <Col md={4} xs={12} >
              <CustomKPI
                bgColor="warning"
                iconSrc={balanceIcon}
                kpiType="Balance"
                kpiValue={dashboardData.balance.amount}
              />
            </Col>
            <Col md={4} xs={12}  >
              <CustomKPI
                bgColor="success"
                iconSrc={incomeIcon}
                kpiType="Income"
                kpiValue={dashboardData.income.amount}
              />
            </Col>
            <Col md={4} xs={12}  >
              <CustomKPI
                bgColor="danger"
                iconSrc={expenseIcon}
                kpiType="Expense"
                kpiValue={dashboardData.expenses.amount}
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2 ">
            <Col
              md={4} 
              
              className="bg-dark   p-2 d-flex align-items-center justify-content-center"
            >
              <DoughnutChart data={dashboardData.balance.chartData} />
            </Col>
            <Col
              md={4} 
              
              className="bg-dark  p-2 d-flex align-items-center justify-content-center"
            >
              <LineChart
                data={dashboardData.income.lineData}
                options={dashboardData.income.options}
              />
            </Col>
            <Col
              md={4} 
              
              className="bg-dark  p-2 d-flex align-items-center justify-content-center"
            >
              <LineChart
                data={dashboardData.expenses.lineData}
                options={dashboardData.expenses.options}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12} lg={12} className="bg-white  rounded p-4 m-3">
              <BarChart
                data={dashboardData.combined.data}
                options={dashboardData.combined.options}
              />
            </Col>
          </Row>
        </Col>
        </Row>
      
    </>
  );
};
