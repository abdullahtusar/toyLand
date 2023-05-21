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
import AllToys from '../pages/Home/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import UpdateToys from '../pages/MyToys/UpdateToys';


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
            path: '/allToys',
            element: <AllToys></AllToys>,
            loader: () => fetch('https://b7a11-toy-marketplace-server-side-abdullahtusar.vercel.app/toys')
        },
        {
            path: '/myToys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/toys/:id',
            element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
            loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-abdullahtusar.vercel.app/toys/${params.id}`)
        },
        {
            path: '/toys/update/:id',
            element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
            loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-abdullahtusar.vercel.app/toys/${params.id}`)
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