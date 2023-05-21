import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({toy}) => {
    const { _id, title, name, category, price, quantity } = toy;
    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{price }$</td>
            <td>{quantity}</td>
            <th>
                {/* {
                    status === 'confirm'? <span className='font-bold text-xl text-[#FF3811]'>Confirmed</span>:
                    <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                } */}
                <Link to={`/toys/toy/${_id}`}><button className="btn btn-sm lowercase border-0 bg-red-600">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysCard;