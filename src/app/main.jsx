/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import Menu from './routes/Menu.jsx';
import Restaurants from './routes/Restaurants.jsx';
import ErrorPage from './ErrorPage.jsx';
import GetStarted from './routes/GetStarted.jsx';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'restaurants',
        element: <Restaurants />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'getstarted',
        element: <GetStarted />,
      },
    ],
  },
  {
    element: <Menu />,
    path: 'menu',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
