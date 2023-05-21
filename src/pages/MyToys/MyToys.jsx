import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const navigate = useNavigate();
    const url = `https://b7a11-toy-marketplace-server-side-abdullahtusar.vercel.app/toys?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                setMyToys(data);
                console.log(data);
            }
            else{
                navigate('/');
            }
            
        })
    }, [url, navigate])

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-abdullahtusar.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          );
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining)
                    }
                })

              
            }
          })
    }

            
    const handleSort = () =>{
        const sortedData = [...myToys].sort((a, b) => b.price - a.price);
        setMyToys(sortedData);
    }

    return (
        <div>
            <div>
            <div className='flex items-center justify-between'>
            <h2 className="text-3xl py-4 font-bold">Your Toys: {myToys.length}</h2>
            <button onClick={handleSort}  className='btn'>Sort By Price</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Edit and Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                // handleBookingConfirm = {handleBookingConfirm}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyToys;