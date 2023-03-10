import { React } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={Logo} alt="swypes logo" /></Link>
      </div>
      <div className="navbar-links">
        <button className="navbar-toggle" type="button">
          <Link to="menu">Menu</Link>
        </button>
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
