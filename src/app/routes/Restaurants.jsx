import React, { useState, useEffect } from 'react';
import '../styles/Restaurants.css';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/restaurants')
    .then(res => res.json())
    .then(data => setRestaurants(data))
  }, []);
  
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
