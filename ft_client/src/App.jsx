import "./App.css";
// import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import Dashboard from "./assets/pages/Dashboard";
import Transaction from "./assets/pages/Transaction";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Auth } from "./auth/Auth";
function App() {
  toast("my message");
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
