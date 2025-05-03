import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import herosection from '../assets/herosection/herosection.png'; 
import arrowImg from '../assets/herosection/arrowicon.png'
import  freshimg from '../assets/herosection/freshtasteandaffordable.png'
import  badboyimg from '../assets/herosection/badboy.png'
import  hotshot from  '../assets/herosection/hotshot.png'
import  Tsspeacil from  '../assets/herosection/Tsspeacil.png'
import  Gypsyking from  '../assets/herosection/Gypsyking.png'
import googleplay from  '../assets/herosection/google-play-black.svg'
import appstore from  '../assets/herosection/apple-store-black.svg'
import  mobileview from  '../assets/herosection/Mobileimg.png'
import   backgroundsection from '../assets/herosection/backgroundsection.svg'
const HeroSection = () => {
  return (
    <>
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
      <Button variant="info" size="lg" className="mt-3 text-white">
        Order Now
      </Button>
    </Container>
 </div>

  <Container fluid className="py-5 px-5 " style={{ backgroundColor: '#f9f9f9' }}>
      <Row className="align-items-center justify-content-center text-center text-md-end">
        <Col className='text-center text-md-center'>
          <h2 className="fw-bold mb-0">CLICK + COLLECT</h2>
          <h2 className="fw-bold">TAKEAWAY + PICKUP</h2>
        </Col>

        <Col  className="   align-item-end justify-content-end">
          <Button
            size="lg"
            className=" fw-bold border-0   "
            style={{ backgroundColor: '#00adee', color: '#ffffff', minWidth: '340px' }}
          >
            ORDER NOW
          </Button>
        </Col>

        <Col  className=" text-start text-md-center justify-content-center ">
          <img src={arrowImg} alt="Arrow" className="img-fluid" style={{  maxWidth: '120px' ,maxHeight: '80px' }} />
        </Col>
      </Row>
    </Container>

    <Container fluid className="py-5 px-5" style={{ backgroundColor: '#f9f9f9' }}>


      <Row className="align-items-center justify-content-center text-center">
      <Col><img src={freshimg} alt="Arrow" className="mt-2 mb-2 rounded " /></Col>
      <Col><img src={badboyimg} alt="Arrow" className="mt-2 mb-2 rounded " /></Col>
      </Row>
      <Row className="align-items-start justify-content-start text-center">
  <Col xs={12} sm={4}>
    <img src={hotshot} alt="Hotshot" className="img-fluid mt-2 mb-2 rounded" />
  </Col>
  <Col xs={12} sm={4}>
    <img src={Tsspeacil} alt="Tsspecial" className="img-fluid mt-2 mb-2 rounded" />
  </Col>
  <Col xs={12} sm={4}>
    <img src={Gypsyking} alt="Gypsyking" className="img-fluid mt-2 mb-2 rounded" />
  </Col>
</Row>

    </Container>
    
    <Card className="py-2 px-5 mt-5 mb-5 mx-5"  style={{
    backgroundImage: `url(${backgroundsection})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
  <Row className="align-items-center justify-content-between">
    
    
    <Col md={6}>
      <h2 className="fw-bold fs-1">Download the app</h2>
      <p className="text-muted">
        Click, sit back, and enjoy and get more value in our mobile app
      </p>

      <Row className="mt-3">
        <Col xs="auto">
          <img src={googleplay} alt="Google Play" />
        </Col>
        <Col xs="auto">
          <img src={appstore} alt="App Store" />
        </Col>
      </Row>
    </Col>

    <Col md={6} className="d-flex justify-content-end">
      <img
        src={mobileview}
        alt="App Preview"
        className="img-fluid mt-2 mb-2 rounded"
        style={{ maxHeight: '400px' }}
      />
    </Col>

  </Row>
</Card>


  </>
  );
};

export default HeroSection;
