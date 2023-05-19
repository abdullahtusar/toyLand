import React from 'react';
import toy1 from '../../../assets/toysGallery/toy-1.jpg'
import toy2 from '../../../assets/toysGallery/toy-2.jpeg'
import toy3 from '../../../assets/toysGallery/toy-3.jpg'
import toy4 from '../../../assets/toysGallery/toy-4.jpg'
import toy5 from '../../../assets/toysGallery/toy-5.jpg'
const Gallery = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='text-4xl text-center font-bold py-8 text-gray-600'>Toy Land Gallery</h1>
            <div className="hero">
                <div className='md:flex gap-4'>
                    <div className='md:w-1/2'>
                        <img className='w-full rounded-xl md:h-[500px]' src={toy3} alt="" />
                    </div>
                    <div className='md:w-1/2 grid gap-4 grid-rows-1 md:grid-rows-2 grid-cols-1 md:grid-cols-2 mt-4 md:mt-0'>
                        <div>
                            <img className='w-full rounded-xl md:h-[242px]' src={toy4} alt="" />
                        </div>
                        <div>
                            <img className='w-full rounded-xl md:h-[242px]' src={toy1} alt="" />
                        </div>
                        <div>
                            <img className='w-full rounded-xl md:h-[242px]' src={toy2} alt="" />
                        </div>
                        <div>
                            <img className='w-full rounded-xl md:h-[242px]' src={toy5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;