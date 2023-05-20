import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
           
        })
        .catch(error =>{
            console.log(error);
        })

    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="hero w-full min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.ibb.co/7ttB460/wallpaperflare-com-wallpaper-4.jpg")` }}>
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 bg-opacity-90">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center'>Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-red-600 border-0">Login</button>
                                </div>
                            </form>
                            <p className='text-center text-xs'>New to Toy Land? <Link to="/register" className='text-red-600 font-bold underline'>Register</Link></p>
                            <div>
                                <div className="divider">Or Sign Up with</div>
                                <div className='text-center'>
                                    <button onClick={handleGoogleSignIn} className="btn btn-circle bg-red-600 font-bold border-0">
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

export default Login;