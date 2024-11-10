import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from localStorage
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleCheckout = () => {
    // Simulate updating the food list by clearing the cart
    alert('Checkout successful! Thank you for your order.');
    setCartItems([]);
    localStorage.removeItem('cartItems');
    navigate('/food-list'); // Go back to food list after checkout
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.foodName} - Quantity: {item.quantity} - Expires on: {item.expirationDate}
          </li>
        ))}
      </ul>
      {cartItems.length > 0 ? (
        <button onClick={handleCheckout}>Checkout</button>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
