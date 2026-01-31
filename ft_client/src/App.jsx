import "./App.css";
// import Button from "react-bootstrap/Button";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./assets/pages/Login";
function App() {
  toast("my message");
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
