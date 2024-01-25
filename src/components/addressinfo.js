import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateStreetAddress, validateCity, validateState, validateZipCode } from './validation';
import "./addressinfostep.css";

const AddressInfoStep = ({ onNext, onPrev,personaldata }) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    const errors = {
      streetAddress: validateStreetAddress(streetAddress, 5),
      city: validateCity(city, 3),
      state: validateState(state),
      zipCode: validateZipCode(zipCode),
    };

    // console.log(personaldata);

    if (Object.values(errors).every((error) => !error)) {
      onNext({
        
        ...personaldata,
        streetAddress,
        city,
        state,zipCode,
      });
    } 
    else {
      setErrors(errors);
    }
  };

  return (
      
    <div id='container'>
      <h2>Step 2: Address Information</h2>
      <div id='address'>
        <label>Street Address:</label>
        <input
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
      </div>
      <div id='city'>
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
       <div id='state'>
  <label>State:</label>
  <select
    value={state}
    onChange={(e) => setState(e.target.value)}
  >
    <option value="">Select a state</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  </select>
  {errors.state && <span className="error">{errors.state}</span>}
</div>


      <div id='zip'>
        <label>Zip Code:</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
      </div>
      <button id='pre' onClick={onPrev}>Previous</button>
      
      <Link to="#" onClick={validateAndProceed}>
      <button id='next'>next</button>
      </Link>
    </div>
  );
};

export default AddressInfoStep;

