import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Eligibility() {
  const [householdSize, setHouseholdSize] = useState('');
  const [isEligible, setIsEligible] = useState(false);
  const navigate = useNavigate();

  const handleEligibilityCheck = (e) => {
    e.preventDefault();
    // Set eligibility based on household size (simple mock check)
    if (householdSize > 0) {
      setIsEligible(true);
      localStorage.setItem('householdSize', householdSize);
      navigate('/food-list'); // Redirect to food list if eligible
    } else {
      alert('Please enter a valid household size');
    }
  };

  return (
    <div>
      <h2>Eligibility Form</h2>
      <form onSubmit={handleEligibilityCheck}>
        <label>Household Size:</label>
        <input
          type="number"
          value={householdSize}
          onChange={(e) => setHouseholdSize(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {isEligible && <p>You are eligible to receive food donations.</p>}
    </div>
  );
}

export default Eligibility;
