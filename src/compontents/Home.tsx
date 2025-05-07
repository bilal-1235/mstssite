import React, { useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import herosection from '../assets/herosection/herosection.png'; 
import arrowImg from '../assets/herosection/arrowicon.png';
import freshimg from '../assets/herosection/freshtasteandaffordable.png';
import badboyimg from '../assets/herosection/badboy.png';
import hotshot from '../assets/herosection/hotshot.png';
import Tsspeacil from '../assets/herosection/Tsspeacil.png';
import Gypsyking from '../assets/herosection/Gypsyking.png';
import googleplay from '../assets/herosection/google-play-black.svg';
import appstore from '../assets/herosection/apple-store-black.svg';
import mobileview from '../assets/herosection/Mobileimg.png';
import backgroundsection from '../assets/herosection/backgroundsection.svg';
import PopupCard from './popupcard/popupcard';
import DeliveryPopup from './popupcard/DeliveryPopup';
import ClickCollectPopup from './popupcard/click-collectcard';

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeliveryPopup, setShowDeliveryPopup] = useState(false);
  const [showClickCollectPopup, setShowClickCollectPopup] = useState(false); 
  const [showFindStorePopup, setShowFindStorePopup] = useState(false);  

  return (
    <>
      {/* Hero Section */}
      <div
        className="position-relative d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${herosection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>

        <Container className="position-relative">
          <h1 className="display-4 fw-bold">Welcome to MR T’s</h1>
          <p className="lead">Delicious moments, delivered to your doorstep.</p>
          <p className="lead">Join us on a journey of taste and quality.</p>
          <div className="text-center mt-5">
            <Button
              size="lg"
              className="mt-3 text-white"
              style={{ backgroundColor: '#00adee' }}
              onClick={() => setShowPopup(true)}
            >
              Order Now
            </Button>
          </div>
        </Container>
      </div>

      {/* Popups */}
      <PopupCard
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onDeliveryClick={() => {
          setShowPopup(false);
          setShowDeliveryPopup(true);
        }}
        onClickCollect={() => {
          setShowPopup(false);
          setShowClickCollectPopup(true);
        }}
        onFindStore={() => {
          setShowPopup(false);
          setShowFindStorePopup(true);
        }}
      />
      <DeliveryPopup
        show={showDeliveryPopup}
        onClose={() => {
          setShowDeliveryPopup(false);
          setShowPopup(true);
        }}
      />
      <ClickCollectPopup
        show={showClickCollectPopup}
        onClose={() => {
          setShowClickCollectPopup(false);
          setShowPopup(true);
        }}
      />

      {/* Click + Collect Section */}
      <Container className="py-4" style={{ backgroundColor: '#f9f9f9' }}>
        <Row className="align-items-center text-center text-md-start g-3">
          <Col xs={12} md={4}>
            <h3 className="fw-bold mb-1">CLICK + COLLECT</h3>
            <h4 className="fw-bold text-secondary">TAKEAWAY + PICKUP</h4>
          </Col>
          <Col xs={12} md={4}>
            <Button
              onClick={() => setShowPopup(true)}
              className="w-100 fw-bold px-4 py-3"
              style={{
                backgroundColor: '#00adee',
                color: '#ffffff',
                border: 'none',
                fontWeight: 800,
                fontSize: '1.25rem',
                borderRadius: '0.5rem',
              }}
            >
              ORDER NOW
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <img
              src={arrowImg}
              alt="Arrow"
              className="img-fluid mx-auto d-block"
              style={{ maxWidth: '60px' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Feature Images Section */}
      <Container fluid className="py-5 px-lg-5 px-3" style={{ backgroundColor: '#f9f9f9' }}>
        <Row className="justify-content-center text-center g-4 mb-4">
          <Col xs={12} sm={6}>
            <img src={freshimg} alt="Fresh Taste" className="img-fluid rounded" />
          </Col>
          <Col xs={12} sm={6}>
            <img src={badboyimg} alt="Bad Boy" className="img-fluid rounded" />
          </Col>
        </Row>
        <Row className="text-center g-4">
          <Col xs={12} sm={6} md={4}>
            <img src={hotshot} alt="Hotshot" className="img-fluid rounded" />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img src={Tsspeacil} alt="Tsspecial" className="img-fluid rounded" />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img src={Gypsyking} alt="Gypsyking" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Download App Section */}
      <Card className="py-5 px-3 px-lg-5 mt-5 mb-5 mx-3 mx-lg-5" style={{
        backgroundImage: `url(${backgroundsection})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Row className="align-items-center text-center text-md-start g-4">
          <Col xs={12} md={6}>
            <h2 className="fw-bold fs-1">Download the app</h2>
            <p className="text-muted">
              Click, sit back, and enjoy and get more value in our mobile app
            </p>
            <Row className="mt-3 justify-content-center justify-content-md-start">
              <Col xs="auto">
                <img src={googleplay} alt="Google Play" />
              </Col>
              <Col xs="auto">
                <img src={appstore} alt="App Store" />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
            <img
              src={mobileview}
              alt="App Preview"
              className="img-fluid rounded"
              style={{ maxHeight: '400px' }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default HeroSection;
