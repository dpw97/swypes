import React from 'react';
import restaurants from '../../restaurant-data.json';
import '../styles/Restaurants.css';

function Restaurants() {
  return (
    <div className="container">
      <h2 className="header">Select meals from your favorite restaurants</h2>
      <ul className="restaurants">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="restaurant">
            <img src={restaurant.image} alt="restaurant logo" className="restaurant-logo" />
            <div className="restaurant-info">
              <h3>{restaurant.restaurant}</h3>
              <p>
                Phone:
                {' '}
                {restaurant.phone}
              </p>
              <p>
                Website:
                {' '}
                <a href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.website}</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
