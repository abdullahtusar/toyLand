import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../layout/Main';
import ErrorPage from '../pages/Home/ErrorPage/ErrorPage';
import Blogs from '../pages/Home/Blogs/Blogs';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path:"*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;