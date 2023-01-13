import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="about">About </Link>
        <Link to="contact">Contact</Link>
        <Link to="errorpage">Privacy Policy</Link>
        <Link to="errorpage">Terms of Use</Link>
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
