import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <BrowserView>
            <Navbar.Brand as={Link} to="/">
              Non Kittilakkananon
            </Navbar.Brand>
          </BrowserView>
          <MobileView>
            <Navbar.Brand as={Link} to="/">
              Non
            </Navbar.Brand>
          </MobileView>
          <Nav className="nav-link">
            <BrowserView>
              <Nav.Link as={Link} to="/about">
                About me
              </Nav.Link>
            </BrowserView>
            <MobileView>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </MobileView>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
