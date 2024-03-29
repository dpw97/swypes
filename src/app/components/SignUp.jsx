/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import '../styles/SignUp.css';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (data) => {
    if (data.email === '') {
      return;
    }
    setSubmitted(true);
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res.status))
      .catch((error) => console.error('error', error));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-container">
        {!submitted && <input type="text" name="email" placeholder="Enter your email" {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />}
        {errors.email && <span className="error">Enter a valid Email</span>}
        {submitted && <div className="success">Thank you for signing up! </div>}
        {!submitted && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}

export default SignUp;
