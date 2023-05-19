import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../layout/Main';
import ErrorPage from '../pages/Home/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
    {
        path:"*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;