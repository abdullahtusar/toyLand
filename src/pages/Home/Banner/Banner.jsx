import React from 'react';
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider3.jpg'
import slider3 from '../../../assets/slide2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[450px] md:h-[600px]">
                    <img src={slider3} className="w-full rounded" />
                    <div className="absolute rounded h-full w-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='lg:w-1/3 px-8 xl:pl-24 space-y-7'>
                            <h1 className='text-3xl md:text-6xl text-white font-bold'>Toy Land Unleash the Magic of Play</h1>
                            <p className='text-white'>Welcome to our toy website, where imagination takes flight and playtime knows no limits!</p>
                            <div>
                                <button className="btn bg-red-700 text-white mr-6 mb-4">Buy Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-transparent border-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[450px] md:h-[600px]">
                    <img src={slider2} className="w-full rounded" />
                    <div className="absolute rounded h-full w-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='lg:w-1/3 px-8 xl:pl-24 space-y-7'>
                            <h1 className='text-3xl md:text-6xl text-white font-bold'>Toy Land Unleash the Magic of Play</h1>
                            <p className='text-white'>Welcome to our toy website, where imagination takes flight and playtime knows no limits!</p>
                            <div>
                                <button className="btn bg-red-600 text-white mr-6 mb-4">Buy Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-transparent border-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[450px] md:h-[600px]">
                    <img src={slider1} className="w-full rounded" />
                    <div className="absolute rounded h-full w-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='lg:w-1/3 px-8 xl:pl-24 space-y-7'>
                            <h1 className='text-3xl md:text-6xl text-white font-bold'>Toy Land Unleash the Magic of Play</h1>
                            <p className='text-white'>Welcome to our toy website, where imagination takes flight and playtime knows no limits!</p>
                            <div>
                                <button className="btn bg-red-600 text-white mr-6 mb-4">Buy Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-5 justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-transparent border-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-600 border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;