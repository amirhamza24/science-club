// import React from 'react';
import Header from '../../Shared/Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bannerImg">
            <Header></Header>
            <div className='w-10/12 mx-auto title-font'>
                <div className='py-5'>
                    <h2 className='uppercase text-8xl font-bold text-center'>Dhaka College Science Club</h2>
                </div>
            </div>
            <h2>This is banner</h2>
        </div>
    );
};

export default Banner;