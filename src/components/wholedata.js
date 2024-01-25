
import React from 'react';
import './summary.css'
const SummaryPage = ({accountdata }) => {
 
  return (
    <div id='summary'>
    <h1 id='summary'>Summary Data</h1>
    <p>
      <strong>Full Name:</strong> {accountdata.fullName}
    </p>
    <p>
      <strong>Email:</strong> {accountdata.email}
    </p>
    <p>
      <strong>Date of Birth:</strong> {accountdata.dob}
    </p>
    <p>
      <strong>Address:</strong> {accountdata.streetAddress}
    </p>
    <p>
      <strong>City:</strong> {accountdata.city}
    </p>
    <p>
      <strong>State:</strong> {accountdata.state}
    </p>
    <p>
      <strong>Zip Code:</strong> {accountdata.zipCode}
    </p>
    <p>
      <strong>User Name:</strong> {accountdata.username}
    </p>
  </div>
  );
};

export default SummaryPage;

