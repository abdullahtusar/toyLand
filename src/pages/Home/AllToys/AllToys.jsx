import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const [query, setQuery]= useState("");
    const toys = useLoaderData();
    const search = (data) => {
        return data.filter((item) => item.name.toLowerCase().includes(query))
    }
    return (
        <div>
            <div className="overflow-x-auto border-2 border-gray-300 rounded-lg">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Title</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>
                                <input type="text" placeholder="Search…" className="search p-4 rounded input input-bordered" 
                                onChange={e=>setQuery(e.target.value)}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            search(toys).slice(0, 20).map(toy => <AllToysCard
                                key={toy._id}
                                toy={toy}
                            ></AllToysCard>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;