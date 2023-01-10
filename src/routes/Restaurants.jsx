import React from 'react'
import restaurants from '../../restaurants.json'
import '../styles/Restaurants.css'
function Restaurants() {
  return (
    <ul className='restaurants'>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <h3>{restaurant.restaurant}</h3>
          <p>Phone: {restaurant.phone}</p>
          <p>Website: {restaurant.website}</p>
        </li>
      ))}
    </ul>
  );
}

export default Restaurants