import React from 'react';
import logo from '../../../assets/logo.png'
const NavBar = () => {
    return (
        <div>
            <div className='text-center'>
                <div className='grid justify-center pt-4 pb-1'>
                    <img width="50" src={logo} />
                </div>
                <a className="btn btn-ghost normal-case text-3xl font-extrabold">Toy Land</a>
            </div>
            <div className="navbar bg-base-100 md:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>All Toys</a></li>
                            <li><a>My Toys</a></li>
                            <li><a>Add A Toy</a></li>
                            <li><a>Blogs</a></li>
                            <div></div>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case md:text-xl font-bold md:pl-0"><img width="40" src={logo} />Toy Land</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add A Toy</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-red-00 border-0 ">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;