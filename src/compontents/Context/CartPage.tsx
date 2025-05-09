// src/components/CartPage.tsx
import React from 'react';
import { useCart } from './CardContext';

const CartPage: React.FC = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <p key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
        </p>
      ))}
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

export default CartPage;
