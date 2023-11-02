// import React from 'react';
import './Footer.css'
import { FaFacebook, FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineGoogle } from 'react-icons/ai';
import logo from '../../../assets/logo/logo.webp'

const Footer = () => {
    return (
        <div className='bg-[#000D37]'>
            <div className='w-10/12 mx-auto pt-16 pb-10 text-center'>
                <div className='space-y-6 body-font'>
                    <div className='flex justify-center'>
                        <img src={logo} alt="" />
                    </div>

                    <div>
                        <h1 className='text-3xl font-bold title-font'>Dhaka College Science Club</h1>
                    </div>

                    <div className='text-sm font-light'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate obcaecati laudantium hic.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse hic quaerat aliquid odio? Quam.</p>
                    </div>

                    <div className='flex justify-center space-x-5 text-xl'>
                        <div>
                            <FaFacebook></FaFacebook>
                        </div>

                        <div>
                            <AiFillInstagram></AiFillInstagram>
                        </div>

                        <div>
                            <AiOutlineGoogle></AiOutlineGoogle>
                        </div>

                        <div>
                            <FaPhoneSquareAlt></FaPhoneSquareAlt>
                        </div>

                        <div>
                            <FaEnvelope></FaEnvelope>
                        </div>
                    </div>

                    <hr className='border-1 border-white' />

                    <div className='font-light space-y-2'>
                        <p>&copy; Copyright 2023, All Rights Reserved by DCSC</p>
                        <p>Built By <span className='text-[#1CC4CF]'>The YOLO Studio</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;