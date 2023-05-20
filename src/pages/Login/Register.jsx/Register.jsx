import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero w-full min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.ibb.co/7ttB460/wallpaperflare-com-wallpaper-4.jpg")` }}>
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center'>Register</h1>
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo" required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-red-600 border-0">Register</button>
                                </div>
                            </form>
                            <p className='text-center text-xs'>Already have an account? <Link to="/login" className='text-red-600 font-bold underline'>Login</Link></p>
                            <div>
                                <div className="divider">Or Sign Up with</div>
                                <div className='text-center'>
                                    <button className="btn btn-circle bg-red-600 font-bold border-0">
                                        <FaGoogle></FaGoogle>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;