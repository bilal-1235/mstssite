import React, { useState } from "react";
import { Form, InputGroup, Button,  Card } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt, FaSyncAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BsEnvelopeOpen } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

import PhoneInput from "react-phone-number-input";


import 'react-phone-number-input/style.css';
import '../styles.css';  // Your custom CSS

const SignUp: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("mxgcn8");

  return (
    <div className=" mt-4 mb-4 d-flex justify-content-center align-items-center min-vh-100 bg-light " >
    <Card className=" shadow p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '0px' }}>
      <div className="  d-flex flex-column align-items-start justify-content-start p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="fw-bold mb-1">Sign Up</h3>
        <p className="text-muted mb-4">Let's create your own account</p>

        <Form>
          {/* First Name */}
          <InputGroup className="custom-input mb-3">
            <InputGroup.Text className="icon">< GoPerson size={24} /></InputGroup.Text>
            <Form.Control placeholder="Enter first name" />
          </InputGroup>

          {/* Last Name */}
          <InputGroup className="custom-input mb-3">
            <InputGroup.Text className="icon"><GoPerson size={24} /></InputGroup.Text>
            <Form.Control placeholder="Enter last name" />
          </InputGroup>

          {/* Email */}
          <InputGroup className="custom-input mb-3">
            <InputGroup.Text className="icon"><BsEnvelopeOpen size={24} /></InputGroup.Text>
            <Form.Control placeholder="Enter email" />
          </InputGroup>

          {/* Password */}
          <InputGroup className="custom-input mb-3">
            <InputGroup.Text className="icon"><MdLockOutline size={24}  /></InputGroup.Text>
            <Form.Control  type="password" placeholder="Enter password" />
          </InputGroup>

          {/* Phone */}
          <InputGroup className="custom-input mb-3">
            <InputGroup.Text className="icon"><LuPhone  size={24}/></InputGroup.Text>
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={(value) => setPhone(value || "")}

              className=" border-1 border-bottom rounded-0 shadow-none"
              type="phonenumber" placeholder="Enter Your Phone Number"
            />
          </InputGroup>

          {/* Captcha */}
          <InputGroup className="mb-3">
            <Form.Control
              className="captcha-display"
              value={captcha}
              readOnly
            />
            <Button className="refresh-btn">
              <FaSyncAlt />
            </Button>
          </InputGroup>

          <Form.Control placeholder="Enter captcha code" className="mb-3" />

          {/* Already have account */}
          <div className="mb-2">
            <a href="#" className="small">Do you already have an account?</a>
          </div>

          {/* Checkbox */}
          <Form.Check
            type="checkbox"
            label="If you do not wish to receive MR T’s deals and discount, tick this box."
            className="mb-3"
          />

          {/* Continue Button */}
          <Button className="  continue-btn w-100 " >
            Continue
          </Button>

          <p className="mt-3 text-muted" style={{ fontSize: "0.875rem" }}>
            By signing into your account you agree to our <a href="#">Terms & Conditions</a>, <a href="#">Privacy Policy</a> & <a href="#">Cookies Policy</a>.
          </p>
        </Form>
      </div>
    </Card>
    </div>
  );
};

export default SignUp;
