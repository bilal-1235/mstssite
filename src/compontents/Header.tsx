
import React, { useState } from 'react';
import { Navbar, Nav, Container ,Offcanvas } from 'react-bootstrap';
import  logo from '../assets/logo/logo.png'; 
import { BsInfoCircle, BsSearch } from "react-icons/bs";
import { FaBars, FaFileContract } from "react-icons/fa";

import '../styles.css'; 

import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
const navigate = useNavigate(); // Use the useNavigate hook to programmatically navigate
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  

  return (
    <>
    <Navbar style={{ backgroundColor: '#00adee' }}  expand="lg">
      <Container>
      <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" height="40" />
        </a>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#" className="d-flex align-items-center ms-3 ">
              <span className="me-2 mb-1 "><BsInfoCircle size={18} /></span>
              <span >Help</span>
            </Nav.Link>
            <div className=" d-flex align-items-center "  onClick={toggleMenu}  style={{ cursor: 'pointer' }} >
                <FaBars size={22} />
              </div>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
    <Offcanvas show={showMenu} onHide={closeMenu} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
        <img src={logo} alt="Logo" height="40" className="ms-2" />
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav className="flex-column">
      <div className="d-grid gap-2">
      <button onClick={() => navigate("/login")} className="  custom-login-btn" type="button">Login </button>
      <button className="custom-login-btn" type="button">Sign up</button>
      </div>
      <div className=" align-items-center justify-content-center d-flex flex-row gap-3  mt-4 ">
      <div className="border rounded text-center sidebar-item">
       <BsSearch size={30} color="#888" />
      <div className="mt-2">Discover</div>
      </div>

      <div className="border rounded text-center sidebar-item">
       <FaFileContract size={30} color="#888" />
      <div className="mt-2">Legal</div>
      </div>

      <div className="border rounded text-center  sidebar-item">
       <BsInfoCircle size={30} color="#888" />
      <div className="mt-2">Help</div>
      </div>
      </div>
      </Nav>
    </Offcanvas.Body>
  </Offcanvas>
  
  </>
  );
};

export default Header;
