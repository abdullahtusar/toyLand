import React from 'react';
import avengers from '../../../assets/toysGallery/Avengers-Logo.svg'
import starwars from '../../../assets/toysGallery/starwars.png'
import transformers from '../../../assets/toysGallery/transformers.png'
const Partners = () => {
    return (
        <div className='bg-base-100'>
            <h1 className='text-4xl text-center font-bold py-8 text-gray-600'>Our Toy Partner</h1>
            <div className='md:flex gap-12 items-center'>
                <div>
                    <img className='w-[2000px]' src={avengers} alt="" />
                </div>
                <div>
                    <img className='w-[2000px] mb-12' src={starwars} alt="" />
                </div>
                <div>
                    <img className='w-[2000px]' src={transformers} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;