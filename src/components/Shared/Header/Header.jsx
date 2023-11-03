// import React from 'react';
import './Header.css'
import logo from '../../../assets/logo/logo.webp'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full py-16 z-10 transition-all ${
            scrolling ? 'bg-[#041551]' : 'bg-transparent'
            }`}
        >
            <div className='fixed top-0 left-0 w-full bg-transparent py-6'>
                <div className='body-font w-10/12 mx-auto'>
                    <div className='flex justify-between gap-7 items-center'>
                        <div>
                            <img className='h-20' src={logo} alt="" />
                        </div>

                        <div className='space-x-10 text-xl'>
                            <Link to="/">Home</Link>
                            <Link to="/event">All Event</Link>
                            <Link to="/">Committee</Link>
                            <Link to="/gallery">Gallery</Link>
                        </div>

                        <div>
                            <button className='bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] text-white py-2 px-6 rounded-lg text-xl'>Ongoing event</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;