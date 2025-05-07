import React, { useState } from "react";
import { Form, InputGroup, Button, Card } from "react-bootstrap";
import { FaSyncAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BsEnvelopeOpen } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../styles.css"; // Custom CSS if needed

const SignUp: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("mxgcn8");

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3 mt-2 mb-2">
      <Card className="shadow p-4 w-100" style={{ maxWidth: "500px", borderRadius: "0px" }}>
        <div className="p-2">
          <h3 className="fw-bold mb-1">Sign Up</h3>
          <p className="text-muted mb-4">Let's create your own account</p>

          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text><GoPerson size={20} /></InputGroup.Text>
              <Form.Control placeholder="Enter first name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text><GoPerson size={20} /></InputGroup.Text>
              <Form.Control placeholder="Enter last name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text><BsEnvelopeOpen size={20} /></InputGroup.Text>
              <Form.Control placeholder="Enter email" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text><MdLockOutline size={20} /></InputGroup.Text>
              <Form.Control type="password" placeholder="Enter password" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text><LuPhone size={20} /></InputGroup.Text>
              <PhoneInput
                international
                defaultCountry="US"
                value={phone}
                onChange={(value) => setPhone(value || "")}
                className="flex-grow-1"
                placeholder="Enter your phone number"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control readOnly value={captcha} />
              <Button variant="outline-secondary">
                <FaSyncAlt />
              </Button>
            </InputGroup>

            <Form.Control className="mb-3" placeholder="Enter captcha code" />

            <div className="mb-2">
              <a href="#" className="small">Already have an account?</a>
            </div>

            <Form.Check
              type="checkbox"
              label="If you do not wish to receive MR T’s deals and discount, tick this box."
              className="mb-3"
            />

            <Button className="w-100 continue-btn" type="submit">
              Continue
            </Button>

            <p className="mt-3 text-muted small text-center">
              By signing into your account you agree to our{" "}
              <a href="#">Terms & Conditions</a>,{" "}
              <a href="#">Privacy Policy</a> &{" "}
              <a href="#">Cookies Policy</a>.
            </p>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
