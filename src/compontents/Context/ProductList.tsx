import React from 'react';
import { useCart } from '../Context/CardContext';
import { Button, Card } from 'react-bootstrap';
import bgimage from '../../assets/herosection/herosection.png'

const products = [
  { id: 1, name: "Pizza Margherita", price: 12, image: bgimage },
  { id: 2, name: "Spaghetti Carbonara", price: 10,image: bgimage },
  { id: 3, name: "Caesar Salad", price: 8,image: bgimage },
  { id: 4, name: "Garlic Bread", price: 5, image: bgimage },
  { id: 5, name: "Lasagna", price: 14,image: bgimage},
  { id: 6, name: "Tiramisu", price: 6, image: bgimage },
];

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Restaurant Menu</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Button style={{ backgroundColor: '#00adee' }} onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
