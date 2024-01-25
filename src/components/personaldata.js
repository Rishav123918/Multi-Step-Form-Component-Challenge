import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateFullName, validateEmail, validateDateOfBirth } from './validation';
import "./personaldata.css";

const PersonalInfoStep = ({ onNext }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    const errors = {
      fullName: validateFullName(fullName),
      email: validateEmail(email),
      dob: validateDateOfBirth(dob),
    };

    if (Object.values(errors).every((error) => !error)) {
      onNext(
        {
            fullName,email,dob,
        }
      );
    } else {
      setErrors(errors);
    }
  };

  return (
    <div id='personal'>
      <h2>Step 1: Personal Information</h2>
      <div id='h2'>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>
      <div id='h3'>
        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div id='h4'>
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {errors.dob && <span className="error">{errors.dob}</span>}
      </div>
      
      <Link to="#" onClick={validateAndProceed}>
      <button id='next'>next</button>
      </Link>
     
      
    </div>
  );
};

export default PersonalInfoStep;

