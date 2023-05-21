import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToysRow = ({myToy, handleDelete}) => {
    const { _id, title, photo, name, email, price, rating, quantity, description, category } = myToy;
    return (
        <tr>
            <th>
                {/* <button className="btn btn-sm btn-circle border-0 bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button> */}
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        {photo && <img src={photo} alt="unknown" />}
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>
                {email}
            </td>
            <td>{category}</td>
            <td>${price}</td>
            <th>
                <Link to={`/toys/update/${_id}`}>
                    <button className="btn btn-ghost btn-xl"><FaEdit className='text-xl '/></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xl"><FaTrash className='text-xl text-red-600'/></button>
            </th>
        </tr>
    );
};

export default MyToysRow;