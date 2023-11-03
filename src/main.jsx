import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Layout/Home/Home.jsx';
import AllEvent from './components/Heading/AllEvent/AllEvent.jsx';
import Gallery from './components/Heading/Gallery/Gallery.jsx';
import Committee from './components/Heading/Committee/Committee.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/event",
            element: <AllEvent></AllEvent>
        },
        {
            path: "/committee",
            element: <Committee></Committee>
        },
        {
            path: "/gallery",
            element: <Gallery></Gallery>
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
