import { useRouteError, Link } from 'react-router-dom';
import React from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Click
        <Link to="/"> Here </Link>
        to go home
      </p>
    </div>
  );
}
