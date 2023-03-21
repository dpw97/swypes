import React from 'react';
import SignUp from '../components/SignUp';
import '../styles/GetStarted.css';

function GetStarted() {
  return (
    <div className="getstarted-container">
      <p>We are still getting things set up. </p>
      <p>Enter your email to be notified whenever we go live!</p>
      <SignUp />
    </div>
  );
}

export default GetStarted;
