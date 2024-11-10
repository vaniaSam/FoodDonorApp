import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export function DonorPage() {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    await addDoc(collection(db, "foodItems"), {
      foodName,
      quantity,
      expirationDate,
      location,
      status: "available", // food available for receivers
    });
    alert("Food donated successfully!");
  };

  return (
    <div>
      <h2>Donate Food</h2>
      <input type="text" placeholder="Food Name" onChange={(e) => setFoodName(e.target.value)} />
      <input type="text" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
      <input type="date" placeholder="Expiration Date" onChange={(e) => setExpirationDate(e.target.value)} />
      <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
      <button onClick={handleSubmit}>Submit Donation</button>
    </div>
  );
}
