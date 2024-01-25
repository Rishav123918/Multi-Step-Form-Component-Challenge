import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { validateUsername,validateConfirmPassword, validatePassword } from './validation';
import './account.css';

const AccountSetupStep = ({onNext, onPrev, addressData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});


  const validateAndSubmit = () => {
    const errors = {
      username: validateUsername(username, 3),
      password: validatePassword(password, 6),
      confirmPassword: password !== confirmPassword ? 'Passwords do not match' : '',
    };

    if (Object.values(errors).every((error) => !error)) {
      
      onNext({
          ...addressData,
          username,
          password,
        });
      console.log(addressData);
    }
     else {
      setErrors(errors);
    }
  };

  return (
    <div id='container'>
     
      <h2>Step 3: Account Setup</h2>
      <div id='username'>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div id='pwd'>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div id='cnfpwd'>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button id='prev' onClick={onPrev}>Previous</button>
      <Link to="#" onClick={validateAndSubmit}>
      <button id='next'>submit</button>
      </Link>
    </div>
  );
};

export default AccountSetupStep;


