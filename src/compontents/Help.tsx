import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  FaUtensils,
  FaMoneyBillAlt,
  FaClock,
  FaBoxOpen,
  FaRegCommentDots,
} from 'react-icons/fa';

const HelpPage: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      icon: <FaUtensils />,
      question: 'How Do I Know If My Order has been Confirmed?',
      answer:
        "You'll receive a confirmation via email and in the app once your order is accepted.",
    },
    {
      icon: <FaMoneyBillAlt />,
      question: 'My Payment Failed Now What Should I Do?',
      answer:
        'Please check your card details or try another payment method. Contact support if needed.',
    },
    {
      icon: <FaClock />,
      question: 'My Order is Late or Has Not Arrived, Who Do I Contact?',
      answer:
        'You can contact the delivery support through the Help Center or in the order section.',
    },
    {
      icon: <FaUtensils />,
      question: 'I’ve Received Wrong Order, What Now?',
      answer:
        'Please report the issue via the app or Help Center to get support or a refund.',
    },
    {
      icon: <FaBoxOpen />,
      question: 'I Paid But the Restaurant has Cancelled My Order?',
      answer:
        'Your amount will be refunded automatically. If not, contact our support team.',
    },
  ];

  return (
    <div className="container py-4 px-3 px-md-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
          <span className="text-primary fw-semibold">← Back / Help</span>
        </div>
        <Button variant="dark" className="d-flex align-items-center">
          <FaRegCommentDots className="me-2" />
          Create Ticket
        </Button>
      </div>

      <h4 className="fw-bold mb-4">Help</h4>

      <Accordion defaultActiveKey="">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 shadow-sm border-0">
            <Accordion.Header>
              <div className="d-flex align-items-center gap-3">
                <div
                  className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 40, height: 40 }}
                >
                  <span style={{ fontSize: '1.2rem', color: '#555' }}>{faq.icon}</span>
                </div>
                <span className="fw-semibold">{faq.question}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default HelpPage;
