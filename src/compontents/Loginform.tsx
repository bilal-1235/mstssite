import React ,{useState}  from 'react';

import { Card, Row, Col,InputGroup, Form, Button } from 'react-bootstrap';
import '../styles.css'; 
import { FiPhone } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Login: React.FC = () => {
  const [country, setcountry] = useState<string | undefined>();
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light " >
    <Card className=" shadow p-4" style={{ maxWidth: '450px', width: '100%', borderRadius: '0px' }}>
      <div className=" d-flex flex-column align-items-start justify-content-start">
        <h2 className = "fw-bold">  Welcome Back</h2>
        <p className = " text-muted">  You can login with email or mobile number</p>
      </div>

      <Form style={{ width: '100%', maxWidth: '400px' }}>
       
        <InputGroup className="mb-3 text-muted">
         <InputGroup.Text>
              <BsTelephone  size={22} />
              
        </InputGroup.Text>
        <PhoneInput
         className="custom-phone-input"
                defaultCountry="US"
                international
                countryCallingCodeEditable={false}
                  value={country}
                  onChange={setcountry} type="phonenumber" placeholder="Enter Your Phone Number"/>
          </InputGroup>

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
            className=" w-100 login-btn"
            type="submit"
          >
            Login
          </Button>
          <Col className="text-start mt-3">
            <a href="#">Not a Member ? </a>
          </Col>
          <Button
            className="w-100 signup-btn  mt-3"
            type="submit"
          >
            Sign up
          </Button>
           <p className=" mt-2 text-center small text-muted ">
           By signing into your account you agree to our{' '}
            <a href="#">Terms & Conditions</a>,{' '}
            <a href="#">Privacy Policy</a> & <a href="#">Cookies Policy</a>.</p>

            
        </div>
      </Form>
    </Card>
    </div>
  );
};

export default Login;
