/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Logo from '../../public/assets/hero.jpg';
import '../styles/Hero.css';
import SignUp from './SignUp';

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="hero-content-container">
        <div className="hero-content">
          <h1>Swypes</h1>
          <h2>Your one-stop shop for college meal plans</h2>
          <p>Sign up today to be notified when you can start picking up your meals </p>
          <div className="signup"><SignUp /></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
