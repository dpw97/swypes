import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  function handleSetDropDown() {
    setDropDown(!dropDown);
  }

  

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt="swypes logo" height="100px" width="250px" />
      </div>
      <div className="navbar-links">
        <button className='navbar-toggle' onClick={handleSetDropDown}>
          <Link to ="menu">Menu</Link>
        </button>
        <ul className={`navbar-items ${dropDown ? 'navbar-items-open' : ''}`}>
          <li className='navbar-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/about">About</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
