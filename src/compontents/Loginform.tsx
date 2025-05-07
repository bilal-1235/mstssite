import React, { useState } from 'react';
import { Card, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import '../styles.css'; 
import { BsTelephone } from "react-icons/bs";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Login: React.FC = () => {
  const [country, setCountry] = useState<string | undefined>();

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <Card className="shadow p-4 w-100" style={{ maxWidth: '450px', borderRadius: '0px' }}>
        <div className="mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">You can login with email or mobile number</p>
        </div>

        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <BsTelephone size={20} />
            </InputGroup.Text>
            <PhoneInput
              className="custom-phone-input flex-grow-1"
              defaultCountry="US"
              international
              countryCallingCodeEditable={false}
              value={country}
              onChange={setCountry}
              placeholder="Enter Your Phone Number"
            />
          </InputGroup>

          <Row className="mb-3">
            <Col xs={6} className="text-start">
              <a href="#">Sign in with email</a>
            </Col>
            <Col xs={6} className="text-end">
              <a href="#">Trouble logging in?</a>
            </Col>
          </Row>

          <Button className="w-100 login-btn mb-3" type="submit">
            Login
          </Button>

          <div className="text-start mb-3">
            <a href="#">Not a Member?</a>
          </div>

          <Button className="w-100 signup-btn mb-3" type="submit">
            Sign up
          </Button>

          <p className="mt-2 text-center small text-muted">
            By signing into your account you agree to our{' '}
            <a href="#">Terms & Conditions</a>,{' '}
            <a href="#">Privacy Policy</a> & <a href="#">Cookies Policy</a>.
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
