import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import "./Header.css";

export default function Header() {
  return (
    <>
      <BrowserView>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Non Kittilakkananon
            </Navbar.Brand>
            <Nav className="nav-link">
              <Nav.Link as={Link} to="/about">
                About me
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </BrowserView>
      <MobileView>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Non Kittilakkananon
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="nav-link">
                <Nav.Link as={Link} to="/about">
                  About me
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </MobileView>
    </>
  );
}
