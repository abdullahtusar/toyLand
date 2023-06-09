import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hook/useTitle';

const AddAToy = () => {
    useTitle('Add A Toy')
    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(title, photo, name, email, category, rating, price, quantity, description);
        const toys = {
            title,
            photo,
            name,
            email,
            category,
            rating,
            price,
            quantity,
            description
        }
        console.log(toys);

        fetch('https://b7a11-toy-marketplace-server-side-abdullahtusar.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Added',
                        text: 'Successfully Added To Queue!',
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div style={{backgroundImage: `url("https://i.ibb.co/W2hFjjK/wallpaperflare-com-wallpaper-3.jpg")` }} className="p-8 md:p-16 border-b-2 border-base-800 bg-base-200 rounded">
                <form className='md:w-9/12 mx-auto bg-red-50 bg-opacity-25 rounded-lg p-4 md:p-8' onSubmit={handleAddToy}>
                    <h1 className="text-5xl font-bold mb-10 text-center text-white">Add Your Toy</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Seller Name</span>
                            </label>
                            <input type="text" name="name" placeholder="seller name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Seller Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label id="category" className="label">
                                <span className="label-text text-white font-semibold">Category</span>
                            </label>
                            {/* <input type="text" name="name" placeholder="category" className="input input-bordered" />
                            <label ></label> */}
                            <select name="category" id="category" className="input input-bordered" required >
                                <option>Unknown</option>
                                <option value="avengers">Avengers</option>
                                <option value="starwars">Star_Wars</option>
                                <option value="transformers">Transformers</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Available quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder='quantity' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Detail description</span>
                            </label>
                            {/* <input type="text" name="description" placeholder="description" className="input input-bordered" /> */}
                            <textarea type="text" name="description" placeholder="description" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-8">
                        <input type="submit" className="btn btn-block border-0 bg-red-600" value="Product Added" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;