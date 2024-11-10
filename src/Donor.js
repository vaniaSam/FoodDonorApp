import React, { useState } from 'react';

function Donor() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleAddFood = (e) => {
    e.preventDefault();
    // Add new food item to the list
    const newItem = { foodName, quantity, expirationDate };
    setFoodItems([...foodItems, newItem]);
    // Clear form fields
    setFoodName('');
    setQuantity('');
    setExpirationDate('');
  };

  return (
    <div>
      <h2>Donate Food</h2>
      <form onSubmit={handleAddFood}>
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />
        <button type="submit">Add Food Item</button>
      </form>

      <h3>Donated Food Items</h3>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.foodName} - Quantity: {item.quantity} - Expires on: {item.expirationDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Donor;

