import React from 'react';

const SubCategory2 = ({toy}) => {
    const { title, category, photo, price, rating } = toy;
    return (
        <>
            <div className='my-5 md:my-2'>
                {
                    category && category === "starwars" ? <div className="card w-60 md:w-96 bg-base-100 shadow-xl border-4 border-gray-300">
                        <figure><img src={photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <p>Price: {price }$</p>
                                    <p>Rating: { rating }</p>
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

export default SubCategory2;