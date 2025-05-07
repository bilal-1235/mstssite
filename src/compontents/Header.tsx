import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import logo from '../assets/logo/logo.png';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import { FaBars, FaFileContract } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import DiscoverSidebar from './discoversidear';
import LegalSidebar from './LegalSidebar';
import HelpSidebar from './helpsidebar';

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
      <Navbar style={{ backgroundColor: '#00adee' }} expand="lg" className="py-2">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" height="40" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link
                onClick={() => {
                  navigate('/help');
                }}
                className="d-flex align-items-center"
              >
                <BsInfoCircle size={18} className="me-2" />
                Help
              </Nav.Link>

              {/* Mobile menu icon */}
              <div
                className="d-lg-none d-flex align-items-center"
                onClick={toggleMenu}
                style={{ cursor: 'pointer' }}
              >
                <FaBars size={22} />
              </div>
            </Nav>
          </Navbar.Collapse>

          {/* Desktop menu icon */}
          <div
            className="d-none d-lg-flex align-items-center"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          >
            <FaBars size={22} />
          </div>
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

            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center">
              <div
                className="border rounded text-center sidebar-item p-3 flex-fill"
                style={{ minWidth: '90px' }}
                onClick={openDiscoverSidebar}
              >
                <BsSearch size={30} color="#888" />
                <div className="mt-2">Discover</div>
              </div>

              <div
                className="border rounded text-center sidebar-item p-3 flex-fill"
                style={{ minWidth: '90px' }}
                onClick={openLegalSidebar}
              >
                <FaFileContract size={30} color="#888" />
                <div className="mt-2">Legal</div>
              </div>

              <div
                className="border rounded text-center sidebar-item p-3 flex-fill"
                style={{ minWidth: '90px' }}
                onClick={openHelpSidebar}
              >
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
        title="Legal"
      />

      <HelpSidebar
        show={showHelp}
        onClose={closeHelpSidebar}
        onBack={() => {
          setShowHelp(false);
          setShowMenu(true);
        }}
        title="Help"
      />
    </>
  );
};

export default Header;
