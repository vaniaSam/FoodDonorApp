import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export function ReceiverPage() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      const foodData = await getDocs(collection(db, "foodItems"));
      setFoodItems(foodData.docs.map(doc => doc.data()));
    };
    fetchFoodItems();
  }, []);

  return (
    <div>
      <h2>Available Food Donations</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.foodName} - {item.quantity} available. Exp: {item.expirationDate} - Location: {item.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
