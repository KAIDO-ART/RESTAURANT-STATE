import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">RestaurantOne</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
          
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pizzalist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Icecream
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Discounts!
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar