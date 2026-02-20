import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImExit } from "react-icons/im";
import { HiOutlineLogin } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";

export const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              <IoCreate /> Sign Up
            </Link>
            <Link className="nav-link" to="/">
              <HiOutlineLogin />
              Log In
            </Link>
            <Link className="nav-link" to="/">
              <ImExit /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
