import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactForm = () => {
  const [phone, setPhone] = useState<string | undefined>();
  const [note, setNote] = useState('');
  const [noteCount, setNoteCount] = useState(0);

  return (
    <div className="container mt-5 mb-5 px-3">
      <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <Card className="p-4 shadow-sm">
        <h5 className="mb-4 fw-bold">Your Information</h5>
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <PhoneInput
              international
              defaultCountry="PK"
              value={phone}
              onChange={setPhone}
              className="w-100"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select a Topic</Form.Label>
            <Form.Select>
              <option value="">Select a Topic</option>
              <option value="order">Order Issue</option>
              <option value="feedback">Booking Issue</option>
              <option value="payment">Payment Issue</option>
              <option value="late">My order is late</option>
              <option value="other">Other</option>
              <option value="general">General Message</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Add a Note</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write a note"
              rows={4}
              maxLength={500}
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
                setNoteCount(e.target.value.length);
              }}
            />
            <div className="text-muted small">({noteCount}/500)</div>
          </Form.Group>

          <Button
            className="mt-4 w-100 fw-bold"
            style={{
              backgroundColor: '#00adee',
              borderColor: '#00adee',
              color: 'white',
            }}
          >
            Send
          </Button>
        </Form>
      </Card>
      </div>
    </div>
  );
};

export default ContactForm;
