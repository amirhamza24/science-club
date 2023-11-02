// import React from 'react';
import about from '../../../assets/about/img1.webp'

const About = () => {
    return (
        <div className="w-10/12 mx-auto my-20 pt-96">
            <div className='flex gap-20'>
                <div className="space-y-7 w-5/12">
                    <div>
                        <h2 className="text-5xl font-bold title-font">DCSC</h2>
                    </div>

                    <div className="bg-white text-black title-font text-center rounded-xl space-x-8 px-2 py-3 text-2xl font-bold">
                        <a className='bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] text-white py-2 px-6 rounded-lg' href="#">About</a>
                        <a href="#">Intro</a>
                        <a href="#">What we do</a>
                    </div>

                    <div className="body-font font-light">
                        <p>Dhaka College Science Club, established in 1996, is a pioneering institution dedicated to fostering scientific curiosity and exploration. With over two decades of nurturing young minds, our club has been a hub for students to delve into various scientific disciplines. Through engaging activities, lectures, and experiments, we empower members to develop critical thinking skills and a profound appreciation for the world of science. Our enduring legacy continues to inspire the next generation of scientists and innovators in Dhaka and beyond.</p>
                    </div>
                </div>

                <div className='w-7/12'>
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;