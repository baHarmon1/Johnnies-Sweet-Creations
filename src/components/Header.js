import React from "react";
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Johnnies Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cakes-wedding">Wedding</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cakes-baby">Baby Shower</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cakes-birthday">Birthday</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cakes-special">Special Occasion</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/cookies">Cookies</Nav.Link>
              <Nav.Link href="/confections">Confections</Nav.Link>
              <Nav.Link href="/alternatives">Alternatives</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
