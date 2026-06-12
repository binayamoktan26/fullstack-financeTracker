import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImExit } from "react-icons/im";
import { HiOutlineLogin } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";
import { RiDashboard2Fill } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { useUser } from "../../src/context/UserContex";
import { useState } from "react";

export const Header = () => {
  // const data = useUser()
  const { user, setUser } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const handleOnLogOut = () => {
    // click on logout then delete accessJWT
    localStorage.removeItem("accessJWT");
    //reset user object from the state
    setUser({});
    setShowMenu(false)
  };
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark " expanded={showMenu}>
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        {user?.name && (
          <div>
            <h4> Welcome {user?.name}</h4>
          </div>
        )}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="nav-link"
                  to="/dashboard" 
                >
                  <RiDashboard2Fill /> Dashboard
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="nav-link"
                  to="/transaction" 
                >
                  <HiOutlineBanknotes /> Transction
                </Link>
                <Link
                  // onClick={() => setShowMenu(false)}
                  onClick={handleOnLogOut} 
                  className="nav-link"
                  to="/"
                >
                  <ImExit /> Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="nav-link"
                  to="/signup"
                >
                  <IoCreate /> Sign Up
                </Link>
                <Link
                  onClick={() => setShowMenu(false)} 
                  className="nav-link"
                  to="/"
                >
                  <HiOutlineLogin />
                  Log In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
