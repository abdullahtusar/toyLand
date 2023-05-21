import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const navigate = useNavigate();
    const url = `http://localhost:5000/toys?email=${user?.email}`;
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
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(!data.error){
    //             setMyToys(data);
    //             console.log(myToys)
    //         }
    //         else{
    //             navigate('/');
    //         }   
    //     });
    // }, [url, navigate, myToys]);

            
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                // handleDelete={handleDelete}
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