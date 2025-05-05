import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import logo from '../assets/logo/logo.png';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import { FaBars, FaFileContract } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import DiscoverSidebar from './discoversidear';
import LegalSidebar from './LegalSidebar';
import HelpSidebar from './helpsidebar';
import  help from './Help';
import '../styles.css';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const navigate = useNavigate();


  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const openDiscoverSidebar = () => {
    setShowMenu(false);
    setShowDiscover(true);
  };

  const openLegalSidebar = () => {
    setShowMenu(false);
    setShowLegal(true);
  };
  const openHelpSidebar = () => {
    setShowMenu(false);
    setShowHelp(true);
  };


  const closeDiscoverSidebar = () => setShowDiscover(false);
  const closeLegalSidebar = () => setShowLegal(false);
  const closeHelpSidebar = () => setShowHelp(false);

  return (
    <>
      <Navbar style={{ backgroundColor: '#00adee' }} expand="lg">
        <Container>
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" height="40" />
          </a>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="d-flex align-items-center ms-3"  onClick={() => {
                  navigate('/help');
                 
                }}>
                <span className="me-2 mb-1">
                  <BsInfoCircle size={18} />
                </span>
                <span>Help</span>
              </Nav.Link>
              <div
                className="d-flex align-items-center"
                onClick={toggleMenu}
                style={{ cursor: 'pointer' }}
              >
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
              <button
                onClick={() => {
                  navigate('/login');
                  setShowMenu(false);
                }}
                className="custom-login-btn"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate('/signup');
                  setShowMenu(false);
                }}
                className="custom-login-btn"
              >
                Signup
              </button>
            </div>

            <div className="d-flex flex-row gap-3 mt-4 justify-content-center">
              <div
                className="border rounded text-center sidebar-item"
                onClick={openDiscoverSidebar}
              >
                <BsSearch size={30} color="#888" />
                <div className="mt-2">Discover</div>
              </div>

              <div
                className="border rounded text-center sidebar-item"
                onClick={openLegalSidebar}
              >
                <FaFileContract size={30} color="#888" />
                <div className="mt-2">Legal</div>
              </div>

              <div className="border rounded text-center sidebar-item"onClick={openHelpSidebar}>

                <BsInfoCircle size={30} color="#888" />
                <div className="mt-2">Help</div>
              </div>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <DiscoverSidebar
        show={showDiscover}
        onClose={closeDiscoverSidebar}
        onBack={() => {
          setShowDiscover(false);
          setShowMenu(true);
        }}
         title="Discover"
      />

      <LegalSidebar
        show={showLegal}
        onClose={closeLegalSidebar}
        onBack={() => {
          setShowLegal(false);
          setShowMenu(true);
        }}
        title='Legal'
      />
       <HelpSidebar
        show={showHelp}
        onClose={closeHelpSidebar}
        onBack={() => {
          setShowHelp(false);
          setShowMenu(true);
        }}
         title='Help'
      />
    </>
  );
};

export default Header;
