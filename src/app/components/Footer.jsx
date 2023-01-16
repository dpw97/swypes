import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="about">About </Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="contact">Contact</Link>
      </div>
      <div className="footer-copyright">
        Copyright ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Swypes
      </div>
    </div>
  );
}

export default Footer;
