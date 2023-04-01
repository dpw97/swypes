import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Menu.css';
import { GrClose } from 'react-icons/gr';

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <div className="menu-close">
        <GrClose onClick={() => navigate(-1)} />
      </div>
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
          <Link to="/getstarted">Get Started</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
