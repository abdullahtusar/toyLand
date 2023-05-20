import React from 'react';

const AddAToy = () => {
    const handleAddToy = event =>{
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
        const booking = {
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
        console.log(booking);

        fetch('https://car-doctor-server-ten-sigma.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Order Confirmed',
                    text: 'Successfully Added To Ordered Queue!',
                  })
            }
        })
        .catch( error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className="p-8 md:p-16 border-b-2 border-base-800 bg-red-50 rounded">
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="name" placeholder="seller name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label id="category" className="label">
                                <span className="label-text">Category</span>
                            </label>
                            {/* <input type="text" name="name" placeholder="category" className="input input-bordered" />
                            <label ></label> */}
                            <select name="category" id="category" className="input input-bordered">
                                <option></option>
                                <option value="avengers">Avengers</option>
                                <option value="starwars">Star_Wars</option>
                                <option value="transformers">Transformers</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder='quantity' className="input input-bordered" />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
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