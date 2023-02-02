/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import React from 'react';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform email signup logic here
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" name="email" placeholder="Enter your email" {...register('email')} />
      {errors.email && <span className="error">Email is required</span>}
      <button type="submit">Enter</button>
    </form>
  );
}

export default SignUp;
