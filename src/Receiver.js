import React from 'react';
import { useNavigate } from 'react-router-dom';

function Receiver() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem('userRole', role); // Store user role in local storage for later use
    if (role === 'donor') {
      navigate('/donor');
    } else {
      navigate('/eligibility');
    }
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelection('donor')}>I am a Donor</button>
      <button onClick={() => handleRoleSelection('receiver')}>I am a Receiver</button>
    </div>
  );
}

export default Receiver;