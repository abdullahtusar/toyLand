import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const toyData = useLoaderData();
    const { _id, title, photo, name, email, price, rating, quantity, description, category } = toyData;
    return (
        <div>
            <div>
                <div className="hero rounded" style={{ backgroundImage: `url("https://i.ibb.co/WcgLLgD/slider3.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold py-10 uppercase">{category}</h1>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen md:min-h-max md:py-36 bg-base-200 border-4 border-gray-300 rounded">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={photo} className="md:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="py-6 text-gray-500">{description}</p>
                            <p className="py-2 text-gray-500">Seller: {name}</p>
                            <p className="py-2 text-gray-500">Email: {email}</p>
                            <p className="py-2 text-gray-500">Price: {price}$</p>
                            <p className="py-2 text-gray-500">Rating: {rating}</p>
                            <p className="py-2 text-gray-500">Quantity: {quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;