import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='home-container' style={{backgroundImage: `url(${Logo})`}}>
        <h1>Swypes</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eligendi aspernatur necessitatibus cum tenetur soluta eaque placeat, sapiente ipsam magnam consectetur fugiat vitae quas rerum beatae error iste dolore?</p>
        <h2>Enter your email to signup!</h2>
        <textarea name="input" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  )
}

export default Home