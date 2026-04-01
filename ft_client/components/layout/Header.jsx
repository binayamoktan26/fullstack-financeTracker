import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImExit } from "react-icons/im";
import { HiOutlineLogin } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";
import { RiDashboard2Fill } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { useUser} from "../../src/context/UserContex"
import { useContext } from "react"; 

export const Header = () => {
 
  // const data = useUser()
  const {setUser}= useUser()
const handleOnLogOut = ()=>{
// click on logout then delete accessJWT 
localStorage.removeItem("accessJWT")
//reset user object from the state
setUser({})

}
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
            <Link className="nav-link" to="/dashboard">
              <RiDashboard2Fill /> Dashboard
            </Link>
            <Link  className="nav-link" to="/transaction">
              <HiOutlineBanknotes /> Transction
            </Link>
            <Link onClick={handleOnLogOut} className="nav-link" to="/">
              <ImExit /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
