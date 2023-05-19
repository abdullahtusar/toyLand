import React from 'react';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img width="50" height="50" src={logo} alt="" />
                    <p><span className='font-bold'>Toy Land</span><br />Providing reliable toys since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder='Your Email' className="input input-bordered w-full pr-20" />
                            <button className="btn absolute top-0 right-0 rounded-l-none bg-red-600 border-0">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                <img width="30" height="30" className='bg-white p-[2px] rounded-3xl' src={logo} alt="" />
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
                    <a>
                        <FaFacebook className='w-6 h-6 bg-[#3b5998] p-1 rounded'></FaFacebook>
                    </a>
                    <a>
                        <FaYoutube className='w-6 h-6 bg-[#c4302b] p-1 rounded'></FaYoutube>
                    </a>
                    <a>
                        <FaTwitter className='w-6 h-6 bg-[#00acee] p-1 rounded'></FaTwitter>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;