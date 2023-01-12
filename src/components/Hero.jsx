import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../assets/hero.jpg'
import '../styles/Hero.css'
function Hero() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  const onSubmit = data => {
    console.log(data);
    // Perform email signup logic here
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${Logo})`}}>
      <div className="hero-content-container">
        <div className="hero-content">
          <h1>The meals you deserve</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" name="email" placeholder="Enter your email" {...register("email")} />
            {errors.email && <span className="error">Email is required</span>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
