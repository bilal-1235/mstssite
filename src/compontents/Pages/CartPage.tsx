// src/pages/CartPage.tsx
import React from "react";
import { useCart } from "../Context/CardContext";
import { ListGroup, Button } from "react-bootstrap";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <>
      <h2>Your Cart</h2>
      <ListGroup>
        {cart.map((p) => (
          <ListGroup.Item key={p.id}>
            {p.name} (${p.price}) x {p.quantity}
            <Button
              variant="danger"
              size="sm"
              className="float-end"
              onClick={() => removeFromCart(p.id)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>Total: ${total.toFixed(2)}</h4>
    </>
  );
};

export default CartPage;
