import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import bgpopup from './popuplogo/bgpopup.png'; // Adjust the path as necessary

interface DeliveryPopupProps {
  show: boolean;
  onClose: () => void;
}

const DeliveryPopup: React.FC<DeliveryPopupProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered  className="text-center">
      <Modal.Body className="p-0">
        <div
          className="position-relative"
          style={{
            backgroundImage: `url(${bgpopup})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
          }}
        >
          {/* Back Button */}
          <Button
            variant="light"
            onClick={onClose}
            className="position-absolute top-0 start-0 m-3 d-flex align-items-center"
          >
            <ArrowLeft className="me-1" />
            Back
          </Button>
        </div>

        <div className="p-4">
          <h3 className="fw-bold mb-3">WHERE ARE WE DELIVERING TODAY?</h3>
          <Form>
            <Form.Group controlId="postcode">
              <Form.Control
                type="number"
                placeholder="Enter postcode here"
                className="p-3 rounded-pill"
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeliveryPopup;
