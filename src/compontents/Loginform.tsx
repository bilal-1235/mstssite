import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../compontents/login.css'; // Optional for custom styles

const Login: React.FC = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="text-center mb-4">
        <h2>Welcome Back</h2>
        <p>You can login with email or mobile number</p>
      </div>

      <Form style={{ width: '100%', maxWidth: '400px' }}>
        <Form.Group controlId="loginInput" className="mb-2">
          <Form.Control type="text" placeholder="Enter email or phone number" />
        </Form.Group>

        <Row className="mb-3">
          <Col className="text-start">
            <a href="#">Sign in with email</a>
          </Col>
          <Col className="text-end">
            <a href="#">Trouble logging in?</a>
          </Col>
        </Row>

        <div className="text-center">
          <Button
            className="w-100 custom-login-btn"
            type="submit"
          >
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
