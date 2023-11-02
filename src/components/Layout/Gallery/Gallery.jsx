// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


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
                        <div className='text-center space-y-5'>
                            <div>
                                <h2 className='title-font text-5xl font-bold'>Gallery</h2>
                            </div>

                            <div className='body-font font-light'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam numquam distinctio? Corporis labore <br /> animi unde. Sequi quia ullam dolores assumenda praesentium nisi, cumque culpa quis.</p>
                            </div>

                            <div>
                            {/* <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}

                            className='swiper_container'

                            >
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Gallery;