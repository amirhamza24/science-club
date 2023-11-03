// import React from 'react';
import gallery1 from '../../../assets/gallery/gallery1.png'
import gallery2 from '../../../assets/gallery/gallery2.png'
import gallery3 from '../../../assets/gallery/gallery3.png'
import gallery4 from '../../../assets/gallery/gallery4.png'
import gallery5 from '../../../assets/gallery/gallery5.png'
import gallery6 from '../../../assets/gallery/gallery6.png'

const Gallery = () => {
    return (
        <div className="pt-44 pb-20 w-10/12 mx-auto">
            <div className='space-y-12'>
                <h2 className='text-4xl title-font font-bold text-center'>Gallery</h2>

                <div className='grid grid-cols-3 gap-7'>
                    <img src={gallery1} alt="" />

                    <img src={gallery2} alt="" />

                    <img src={gallery3} alt="" />

                    <img src={gallery4} alt="" />

                    <img src={gallery5} alt="" />

                    <img src={gallery6} alt="" />

                    <img src={gallery1} alt="" />

                    <img src={gallery2} alt="" />

                    <img src={gallery3} alt="" />

                    <img src={gallery4} alt="" />

                    <img src={gallery5} alt="" />

                    <img src={gallery6} alt="" />
                </div>

                <div className='text-center'>
                    <button className='bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] text-white py-2 px-6 rounded-lg body-font'>Load More</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;