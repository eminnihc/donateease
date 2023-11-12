import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Header = () => {
  const location = useLocation();

  const activeElement = (e) => {
    if (location.pathname === "/") {
      console.log(e.currentTarget);
    } else if (location.pathname === "/about") {
      console.log(e.currentTarget);
    } else if (location.pathname === "/contact") {
      console.log(e.currentTarget);
    } else if (location.pathname === "/login") {
      console.log(e.currentTarget);
    } else if (location.pathname === "/signup") {
      console.log(e.currentTarget);
    }
  };

  const activeKey = location.pathname === "/" ? "/about" : location.pathname;

  return (
    <Navbar
      expand="lg"
      className="theme-navbar"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        {/* <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: "32px" }}
        >
          <Image src="/images/icon.jpeg" style={{ height: "30px" }}></Image>
          DonateEase
        </Navbar.Brand> */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: "32px", display: "flex", alignItems: "center" }}
        >
          <Image
            src="/images/icon.jpeg"
            style={{ height: "30px", paddingRight: "4px" }}
          ></Image>
          <span style={{ marginBottom: "1px" }}>DonateEase</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav activeKey={activeKey} className="text-right">
          <Nav.Link as={Link} eventKey="/" to="/" className="me-1">
            Home
          </Nav.Link>
          <Nav.Link as={Link} eventKey="/about" to="/about" className="me-1">
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            eventKey="/contact"
            to="/contact"
            className="me-1"
          >
            Contact
          </Nav.Link>
          <Nav.Link as={Link} eventKey="/login" to="/login" className="me-1">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
