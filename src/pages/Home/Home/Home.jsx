import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import AboutUs from '../AboutUs/AboutUs';
import Partners from '../Partner/Partners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <AboutUs></AboutUs>
            <Partners></Partners>
        </div>
    );
};

export default Home;