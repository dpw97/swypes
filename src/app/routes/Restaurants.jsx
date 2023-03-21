import React, { useState, useEffect } from 'react';
import '../styles/Restaurants.css';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="restaurant-container">
      <h2 className="header">Select meals from your favorite restaurants</h2>
      <ul className="restaurants">
        {restaurants.map((restaurant) => (
          // eslint-disable-next-line no-underscore-dangle
          <li key={restaurant._id} className="restaurant">
            <img src="https://i.ibb.co/hFjLyDn/restaurant-logo.jpg" alt="restaurant logo" className="restaurant-logo" />
            <div className="restaurant-info" key={restaurant.id}>
              <h3>{restaurant.name}</h3>
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
