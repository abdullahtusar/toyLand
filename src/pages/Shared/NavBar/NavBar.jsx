import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const NavItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys">All Toys</Link></li>
        {
            user ? <>
                <li><Link to="/myToys">My Toys</Link></li>
                <li><Link to="/addatoy">Add A Toy</Link></li>
            </> :
                <></>
        }
        <li><Link to="/blogs">Blogs</Link></li>
    </>
    return (
        <div>
            <div className='text-center'>
                <div className='grid justify-center pt-4 pb-1'>
                    <img width="50" src={logo} />
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-3xl font-extrabold pb-2 ">Toy Land</Link>
            </div>
            <div className="navbar bg-base-200 border-2 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case md:text-xl font-bold md:pl-0"><img width="40" src={logo} />Toy Land</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {NavItems}
                    </ul>
                </div>
                {
                    user ? <div className="navbar-end">
                        {
                            user.photoURL && <img style={{ height: "50px", width: "50px", hover: `${user.displayName}` }}  src={user.photoURL} title={user.displayName} className='rounded-3xl mr-4 border-2 border-gray-300'/>
                        }
                        <Link onClick={handleLogOut} className="btn bg-red-600 border-0 ">LogOut</Link> </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login" className="btn bg-red-600 border-0 ">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};
export default NavBar;