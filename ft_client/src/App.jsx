import "./App.css";
// import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";



function App() {
  toast("my message");
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
