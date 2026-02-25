import "./App.css";
// import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import { DefaultLayout } from "../components/layout/DefaultLayout";
function App() {
  toast("my message");
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
