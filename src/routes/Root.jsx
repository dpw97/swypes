import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'
import '../styles/Root.css'
function Root() {
  return (    
    <div className='root'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root