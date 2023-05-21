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
import PrivateRoute from './PrivateRoute';
import SingleProduct from '../pages/Home/Products/SingleProduct';


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
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
            path: '/toys/:id',
            element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
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