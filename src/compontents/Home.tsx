import React from 'react';
import { Container, Button } from 'react-bootstrap';
import herosection from '../assets/herosection/herosection.png'; 
const HeroSection = () => {
  return (
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
  
  );
};

export default HeroSection;
