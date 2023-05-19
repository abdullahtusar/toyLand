import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:w-10/12 mx-auto bg-base-100'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
)
