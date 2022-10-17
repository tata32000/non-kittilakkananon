import Container from "react-bootstrap/Container";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
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
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Non Kittilakkananon
            </Navbar.Brand>
            <NavDropdown
              title=""
              align={{ lg: "start" }}
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/about">
                About me
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
      </MobileView>
    </>
  );
}
