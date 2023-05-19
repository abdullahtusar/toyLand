import React from 'react';
import about_img from '../../../assets/about.jpg'
import { FaArrowRight } from 'react-icons/fa';
const AboutUs = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='text-4xl text-center font-bold py-8 text-gray-600'>About Us</h1>
            <div className='md:flex gap-12 items-center'>
                <div>
                    <img className='w-full rounded-xl md:h-[450px]' src={about_img} alt="" />
                </div>
                <div className='mt-4 md:mt-0'>
                    <div className="max-w-2xl text-gray-600 text-center md:text-left">
                        <p className="mb-5 font-bold text-red-600">What We Do <FaArrowRight className='inline'/></p>
                        <h1 className="mb-5 text-4xl font-bold">We help organize events for kids</h1>
                        <p className="mb-5">Welcome to Toy Land, the ultimate destination for all things play and imagination! We believe that every child deserves to experience the joy and wonder that toys bring to their lives. At Toy land, we curate a wide selection of toys from across the globe, ensuring that our collection sparks creativity, encourages learning, and ignites endless hours of fun.</p>
                        <button className="btn bg-red-600 border-0">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;