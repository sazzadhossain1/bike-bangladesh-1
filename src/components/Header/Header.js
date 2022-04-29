import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar className="color" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="text-primary text" as={Link} to="/">
            BIKE BANGLADESH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="right-nav-link ms-auto">
              <Nav.Link className="text-primary" as={Link} to="/home">
                Home
              </Nav.Link>
              
              <Nav.Link className="text-primary" as={Link} to="/blogs">
                Blogs
              </Nav.Link>


              <Nav.Link className="text-primary" as={Link} to="/signup">
                Sign Up
              </Nav.Link>

             

              <Nav.Link className="text-primary" as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
