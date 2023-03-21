/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/Hero.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/hero.jpg';

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
        `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
        ),
        url(${Logo})`,
      }}
    >
      <div className="hero-content-container">
        <div className="hero-content">
          <h2>Your one-stop shop for college meal plans</h2>
          <h3>Let us handle your meals so you can focus on your education</h3>
          <p>Sign up today to be notified when you can start picking up your meals </p>
          <Link to="getstarted"><Button type="primary">Get Started</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
