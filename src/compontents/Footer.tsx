import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles.css'; // Your custom CSS


const Footer = () => {
  return (
    <footer className=" text-light" style={{ backgroundColor: '#00adee' }}>

      <Container>
        <Row className="pt-5 pb-3">
          <Col md={3}>
            <h5 className="fw-bold mb-3">Discover</h5>
            <ul className="list-unstyled">
              <li>Our Story</li>
              <li>Franchise</li>
              <li>Careers</li>
              <li>Location</li>
              <li>Menu</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="">
              <li>Terms & conditions</li>
              <li>Privacy policy</li>
              <li>Legal Notice</li>
              <li>Cookies</li>
              <li>Allergy info</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="fw-bold mb-3">Help</h5>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-bold mb-3">Find Us On</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-2 mb-3">
              <span className="d-inline-flex align-items-center justify-content-center bg-dark text-white rounded" style={{ width: '38px', height: '38px', fontSize: '1rem' }}><FaFacebookF /></span>
              <span className="d-inline-flex align-items-center justify-content-center bg-dark text-white rounded" style={{ width: '38px', height: '38px', fontSize: '1rem' }}><FaInstagram /></span>
              <span className="d-inline-flex align-items-center justify-content-center bg-dark text-white rounded" style={{ width: '38px', height: '38px', fontSize: '1rem' }}><FaTiktok /></span>
            </div>
            <h6 className="fw-bold mb-2">Get Our App</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              <img src="/images/google-play.png" alt="Google Play" height="40" />
              <img src="/images/app-store.png" alt="App Store" height="40" />
            </div>
          </Col>
        </Row>

        <Row className="text-center pt-3 ">
          <Col>
            <small className="mb-3 d-block">
              2025 @ MR Ts • <span className="mx-2 " /> Powered by • VALT
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
