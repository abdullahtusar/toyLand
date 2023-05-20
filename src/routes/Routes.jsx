import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../layout/Main';
import ErrorPage from '../pages/Home/ErrorPage/ErrorPage';
import Blogs from '../pages/Home/Blogs/Blogs';
import AddAToy from '../pages/Home/AddAToy/AddAToy';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register.jsx/Register';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    }
  ]);

export default router;