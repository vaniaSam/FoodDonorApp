import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodList() {
  const [foodItems, setFoodItems] = useState([
    { id: 1, foodName: 'Apples', quantity: 10, expirationDate: '2024-12-01' },
    { id: 2, foodName: 'Bread', quantity: 5, expirationDate: '2024-11-20' },
    { id: 3, foodName: 'Milk', quantity: 8, expirationDate: '2024-11-15' },
  ]); // Example mock food items
  const [cart, setCart] = useState([]);
  const householdSize = parseInt(localStorage.getItem('householdSize'), 10) || 1;
  const itemLimit = householdSize * 2; // Allowing 2 items per household member
  const navigate = useNavigate();

  const addToCart = (item) => {
    if (cart.length < itemLimit) {
      setCart([...cart, item]);
    } else {
      alert('You have reached the maximum allowed items based on your household size.');
    }
  };

  const proceedToCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
    <div>
      <h2>Available Food Donations</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.foodName} - Quantity: {item.quantity} - Expires on: {item.expirationDate}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button onClick={proceedToCheckout}>Proceed to Checkout</button>
      )}
    </div>
  );
}

export default FoodList;
