import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../layout/Main';
import ErrorPage from '../pages/Home/ErrorPage/ErrorPage';
import Blogs from '../pages/Home/Blogs/Blogs';
import AddAToy from '../pages/Home/AddAToy/AddAToy';
import Home from '../pages/Home/Home/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/addatoy',
            element: <AddAToy></AddAToy>
        },
        {
            path:"*",
            element: <ErrorPage></ErrorPage>
        }
      ]
    }
  ]);

export default router;