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
import ClickCollectPopup  from './popupcard/click-collectcard';


const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeliveryPopup, setShowDeliveryPopup] = useState(false);
  const [showClickCollectPopup, setShowClickCollectPopup] = useState(false); 
  const [showFindStorePopup, setShowFindStorePopup] = useState(false);  
  

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
          <div className="text-center mt-5">
            <Button
              size="lg"
              className="mt-3 text-white"
              style={{ backgroundColor: '#00adee' }}
              onClick={() => setShowPopup(true)}
            >
              Order Now
            </Button>

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
               setShowDeliveryPopup(false);      // close delivery popup
                setShowPopup(true);               // go back to previous popup
               }}
                />
               <ClickCollectPopup
  show={showClickCollectPopup}
  onClose={() => {
    setShowClickCollectPopup(false);
    setShowPopup(true);
  }}
/>
          </div>
        </Container>
      </div>
      <div className="d-flex align-items-center justify-content-between px-5 py-4 mx-10 my-10"  style={{
    backgroundColor: '#f9f9f9',
    marginLeft: '10rem',
    marginRight: '10rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  }}>
  <div>
    <h3 className="fw-bold mb-0">CLICK + COLLECT</h3>
    <h4 className="fw-bold text-secondary">TAKEAWAY + PICKUP</h4>
  </div>

  <Button onClick={() => setShowPopup(true)}
            
    className="fw-bold px-4 py-3"
    style={{
      backgroundColor: '#00adee',
      color: '#fffff',
      border: 'none',
      fontWeight: 800,
      fontSize: '1.25rem',
      borderRadius: '0.5rem',
    }}
  >
    ORDER NOW
  </Button>


    <img src={arrowImg} alt="Arrow" />
  
</div>


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
