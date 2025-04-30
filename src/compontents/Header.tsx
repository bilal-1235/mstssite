import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import  logo from '../assets/logo/logo.png'; // Adjust the path as necessary
const Header: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: '#00adee' }}  expand="lg">
      <Container>
      <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" height="40" />
        </a>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Help</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
