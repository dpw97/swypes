import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <div>
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
