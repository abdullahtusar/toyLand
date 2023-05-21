import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysCard from './AllToysCard';
import useTitle from '../../../hook/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const [query, setQuery] = useState("");
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
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller</th>
                            <th>Toy Title</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>
                                <input type="text" placeholder="Search" className="search p-2 rounded-lg border-4 border-gray-200"
                                    onChange={e => setQuery(e.target.value)} />
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