import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export class CustomNavbar extends Component {
  render() {
    
    return (
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">HS News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="business">Business</Nav.Link>
            <Nav.Link as={Link} to="entertainment">Entertainment</Nav.Link>
            <Nav.Link as={Link} to="general">General</Nav.Link>
            <Nav.Link as={Link} to="health">Health</Nav.Link>
            <Nav.Link as={Link} to="science">Science</Nav.Link>
            <Nav.Link as={Link} to="sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="technology">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default CustomNavbar; // Change BrandExample to CustomNavbar
