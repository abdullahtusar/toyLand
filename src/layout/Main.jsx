import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;