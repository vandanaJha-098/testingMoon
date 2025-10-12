import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css'

function MyNavbar() {
  return (
    <Navbar bg="dark" className="custom-navbar" variant="dark" expand="lg">
      <Container className="me-auto1">
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/career">CAREER</Nav.Link>
            <Nav.Link href="/client">CLIENTS</Nav.Link>
            <Nav.Link href="/accrediation">ACCREDIATION</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

