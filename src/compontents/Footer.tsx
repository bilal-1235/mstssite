import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="text-light pt-5 pb-3" style={{ backgroundColor: '#00adee' }}>
      <Container>
        <Row className="gy-4">
        <Col xs={12} md={3} className="text-start  text-md-start">
         <h5 className="fw-bold mb-3">Discover</h5>
          <ul className="list-unstyled">
          <li>Our Story</li>
          <li>Franchise</li>
          <li>Careers</li>
          <li>Location</li>
           <li>Menu</li>
          </ul>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li>Terms & conditions</li>
              <li>Privacy policy</li>
              <li>Legal Notice</li>
              <li>Cookies</li>
              <li>Allergy info</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h5 className="fw-bold mb-3">Help</h5>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5 className="fw-bold mb-3">Find Us On</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-2 mb-3">
              {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, index) => (
                <span
                  key={index}
                  className="d-inline-flex align-items-center justify-content-center bg-dark text-white rounded"
                  style={{ width: '38px', height: '38px', fontSize: '1rem' }}
                >
                  <Icon />
                </span>
              ))}
            </div>

            <h6 className="fw-bold mb-2">Get Our App</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              <img src="/images/google-play.png" alt="Google Play" height="40" />
              <img src="/images/app-store.png" alt="App Store" height="40" />
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <Row>
          <Col className="text-center">
            <small>
              © 2025 MR Ts • Powered by <strong>VALT</strong>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
