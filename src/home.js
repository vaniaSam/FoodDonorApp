import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const history = useHistory();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.push(userRole === 'donor' ? '/donor' : '/receiver');
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.push(userRole === 'donor' ? '/donor' : '/receiver');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <h2>Login/Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>

      <div>
        <button onClick={() => setUserRole('donor')}>I'm a Donor</button>
        <button onClick={() => setUserRole('receiver')}>I'm a Receiver</button>
      </div>
    </div>
  );
}

