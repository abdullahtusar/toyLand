import React from 'react';
import avengers from '../../../assets/toysGallery/Avengers-Logo.svg'
import starwars from '../../../assets/toysGallery/starwars.png'
import transformers from '../../../assets/toysGallery/transformers.png'
const Partners = () => {
    return (
        <div className='bg-base-100'>
            <h1 className='text-4xl text-center font-bold pt-12 text-gray-600'>Our Toy Partners</h1>
            <p className='text-center py-3 text-gray-600'>we take pride in partnering with renowned toy manufacturers and brands from around the world. <br />We have carefully selected our toy partners based on their commitment to excellence, innovation, and the joy they bring to childrens lives.</p>
            <div className='md:flex gap-12 items-center p-4'>
                <div>
                    <img className='w-[500px]' src={avengers} alt="" />
                </div>
                <div>
                    <img className='w-[500px] mb-12' src={starwars} alt="" />
                </div>
                <div>
                    <img className='w-[500px]' src={transformers} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;