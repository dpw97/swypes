import React from 'react';
import '../styles/CallToAction.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Takeout1 from '../../../assets/takeout1.jpg';
import Takeout2 from '../../../assets/takeout2.jpg';

function CallToAction() {
  return (
    <div className="cta-container">
      <div className="cta">
        <div className="cta-1-info">
          <h1>Lunch is on us</h1>
          <p>Let us help you discover the perfect meal plan. </p>
          <Link to="getstarted">
            <Button type="primary">Sign Up</Button>
          </Link>
        </div>
        <div className="image1">
          <img className="cta-image" src={Takeout1} width="600px" height="400px" alt="takeout box" />
        </div>
      </div>
      <div className="cta">
        <img className="cta-image" src={Takeout2} width="600px" height="400px" alt="salmon takeout" />
        <div className="cta-2-info">
          <h1>We've got you covered</h1>
          <p>Check out our selection</p>
          <p> of the best restaurants in your area. </p>
          <Link to="restaurants">
            <Button type="primary">Restaurants</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
