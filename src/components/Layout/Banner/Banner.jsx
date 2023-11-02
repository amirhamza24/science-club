// import React from 'react';
import Header from '../../Shared/Header/Header';
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import rectangle1 from '../../../assets/bannerCarousel/Rectangle 27.png'
import rectangle2 from '../../../assets/bannerCarousel/Rectangle 28.png'
import rectangle3 from '../../../assets/bannerCarousel/Rectangle 29.png'

// import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
    return (
        <div className="bannerImg">
            <Header></Header>
            <div className='w-10/12 mx-auto title-font'>
                <div className='pt-5 pb-16'>
                    <h2 className='uppercase text-8xl font-bold text-center'>Dhaka College Science Club</h2>
                </div>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 2500
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <img className='h-[500px] w-full' src={rectangle1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-[500px] w-full' src={rectangle2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-[500px] w-full' src={rectangle3} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-[500px] w-full' src={rectangle3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;