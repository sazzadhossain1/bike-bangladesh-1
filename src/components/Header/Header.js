import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar className="color" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="text-white text" as={Link} to="/">
            BIKE BANGLADESH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="right-nav-link ms-auto">
              <Nav.Link className="text-white font" as={Link} to="/home">
                Home
              </Nav.Link>
              

              <Nav.Link className="text-white font" as={Link} to="/blogs">
                Blogs
              </Nav.Link>

              {user ? (
                <>
                  {/* <Nav.Link
                    className="text-white font"
                    as={Link}
                    to="/manageItems"
                  >
                    Manage Items
                  </Nav.Link> */}
                  <Nav.Link className="text-white font" as={Link} to="/products">
                Products
              </Nav.Link>

                  <Nav.Link className="text-white font" as={Link} to="/addItem">
                    Add Item
                  </Nav.Link>

                  <Nav.Link className="text-white font" as={Link} to="/myItems">
                    My Items
                  </Nav.Link>

                  <Nav.Link
                    onClick={handleLogOut}
                    className="text-white font"
                    as={Link}
                    to="/login"
                  >
                    LogOut
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className="text-white font" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

              <Nav.Link className="text-white font" as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
