import React from 'react';
import '../styles/HowItWorks.css';

function HowItWorks() {
  return (
    <div className="step-container">
      <h2>How it works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1</h3>
          <p>Sign up for our meal plan service by providing your email address.</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Select your meal plan and customize it to your dietary preferences and schedule.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Pick up your meals from our designated location at your college campus.</p>
        </div>
        <div className="step">
          <h3>Step 4</h3>
          <p>Enjoy delicious and nutritious meals that will fuel your academic success.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
