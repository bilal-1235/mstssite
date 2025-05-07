// src/pages/CheckoutPage.tsx
import React, { useState } from "react";
import { useCart } from "../Context/CardContext";
import { Form, Button, Alert } from "react-bootstrap";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) return <Alert variant="success">Order Placed!</Alert>;

  return (
    <>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
        </Form.Group>
        <Button type="submit">Place Order</Button>
      </Form>
    </>
  );
};

export default CheckoutPage;
