import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Week from '../components/Week';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Week />
    </div>
  );
}

export default Home;
