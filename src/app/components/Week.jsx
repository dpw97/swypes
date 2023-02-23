import { React, useState, useEffect } from 'react';
import { Tabs, Card } from 'antd';
import '../styles/Week.css';

const { Meta } = Card;
function Week() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const days = [
    {
      key: '1',
      label: 'Fri',
      children:
        // eslint-disable-next-line react/jsx-indent
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="Restaurant" src="https://i.ibb.co/hFjLyDn/restaurant-logo.jpg" />}
        >
          <Meta title={restaurants[0]?.name} description={restaurants[0]?.website} />
        </Card>,
    },
    {
      key: '2',
      label: 'Sat',
      children:
        // eslint-disable-next-line react/jsx-indent
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="Restaurant" src="https://i.ibb.co/hFjLyDn/restaurant-logo.jpg" />}
        >
          <Meta title={restaurants[1]?.name} description={restaurants[1]?.website} />
        </Card>,
    },
    {
      key: '3',
      label: 'Sun',
      children:
        // eslint-disable-next-line react/jsx-indent
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="Restaurant" src="https://i.ibb.co/hFjLyDn/restaurant-logo.jpg" />}
        >
          <Meta title={restaurants[2]?.name} description={restaurants[2]?.website} />
        </Card>,
    },
  ];
  return (
    <div className="week">
      <div className="weekHeader">
        <h2>Enjoy reliably chosen meal plans from the most popular restaurants in your area</h2>
      </div>
      <div className="days">
        <Tabs defaultActiveKey="1" items={days} onChange={onChange} />

      </div>

    </div>
  );
}

export default Week;
