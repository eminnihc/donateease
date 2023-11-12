import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>DonateEase</Navbar.Brand>
        <Navbar.Text>Copyright &copy; 2023</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
