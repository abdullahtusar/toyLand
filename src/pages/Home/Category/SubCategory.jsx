import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const SubCategory = ({ toy }) => {
    const { title, category, photo, price, rating } = toy;
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])
    return (
        <>
            <div>
                {
                    category && category === "avengers" ? <div className="card w-60 md:w-96 bg-base-100 shadow-xl border-4 border-gray-300">
                        <figure>
                            <div data-aos="flip-left">
                                <img src={photo} alt="Shoes" />
                            </div>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <p>Price: {price}$</p>
                                    <p>Rating: {rating}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-red-600 border-0">Details</button>
                                </div>
                            </div>
                        </div>
                    </div> : <div></div>
                }
            </div>
        </>
    );
};

export default SubCategory;