import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Root from './routes/Root';
import About from './routes/About'
import Home from './routes/Home';
import Contact from './routes/Contact'
import Menu from './routes/Menu'
import Restaurants from './routes/Restaurants';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "restaurants",
        element: <Restaurants/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
    ],
  },
  {
    element: <Menu />,
    path: "menu",
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
