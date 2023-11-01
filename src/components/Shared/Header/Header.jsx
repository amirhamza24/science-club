// import React from 'react';
import './Header.css'
import logo from '../../../assets/logo/logo.webp'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='body-font bg-transparent w-10/12 mx-auto py-8'>
            <div>
                <div className='flex justify-between gap-7 items-center'>
                    <div>
                        <img className='h-24' src={logo} alt="" />
                    </div>

                    <div className='space-x-10 text-xl'>
                        <Link to="/">Home</Link>
                        <Link to="/">All Event</Link>
                        <Link to="/">Committee</Link>
                        <Link to="/">Gallery</Link>
                    </div>

                    <div>
                        <button className='bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] text-white py-2 px-6 rounded-lg text-xl'>Ongoing event</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;