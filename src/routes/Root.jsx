import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Root.css';

function Root() {
  return (
    <div className="root">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
