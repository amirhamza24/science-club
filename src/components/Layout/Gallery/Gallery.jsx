// import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import gallery1 from '../../../assets/gallery/gallery1.png'
import gallery2 from '../../../assets/gallery/gallery2.png'
import gallery3 from '../../../assets/gallery/gallery3.png'
import gallery4 from '../../../assets/gallery/gallery4.png'
import gallery5 from '../../../assets/gallery/gallery5.png'
import gallery6 from '../../../assets/gallery/gallery6.png'

const Gallery = () => {
    return (
        <div className='pb-20'>
                <div className='w-10/12 mx-auto h-full'>
                    <div className='flex items-center justify-center h-full'>
                        <div className='text-center space-y-6'>
                            <div>
                                <h2 className='title-font text-5xl font-bold'>Gallery</h2>
                            </div>

                            <div className='body-font font-light'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam numquam distinctio? Corporis labore <br /> animi unde. Sequi quia ullam dolores assumenda praesentium nisi, cumque culpa quis.</p>
                            </div>

                            <div className='grid grid-cols-3 gap-7'>
                                <img src={gallery1} alt="" />

                                <img src={gallery2} alt="" />

                                <img src={gallery3} alt="" />

                                <img src={gallery4} alt="" />

                                <img src={gallery5} alt="" />

                                <img src={gallery6} alt="" />
                            </div>

                            <div className='flex justify-center items-center gap-5'>
                                <div className='w-16 h-9 border rounded flex items-center justify-center'>
                                    <button className=''>
                                        <BsArrowLeft className='text-xl'></BsArrowLeft>
                                    </button>
                                </div>

                                <div className='w-16 h-9 bg-[#216DDE] rounded flex items-center justify-center'>
                                    <button>
                                        <BsArrowRight className='text-xl'></BsArrowRight>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Gallery;