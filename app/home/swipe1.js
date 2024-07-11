"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        autoplay={true}
        loop={true}
        slidesPerView={1.6}
        effect='slide'
        speed={2500}
        modules={[Autoplay, Navigation]}  
        breakpoints={{
          // when window width is >= 480px
          480: {
            slidesPerView: 0.8,
            spaceBetween: 10
          },
           // when window width is >= 640px
          640: {
            slidesPerView: 0.95,
            spaceBetween: 20
          },
          // when window width is >= 800px
          800: {
            slidesPerView: 1,
            spaceBetween: 30
          },
           // when window width is >= 960px
          960: {
            slidesPerView: 1.1,
            spaceBetween: 40
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 1.3,
            spaceBetween:50
          },
          // when window width is >= 1400px
          1400: {
            slidesPerView: 1.5,
          }
        }}
      >
        {/* Item 1 */}
        <SwiperSlide className='min-w-min'>
            <h2 className="display-1 font-poppins font-semibold uppercase mb-0">
            Exclusive Design
            </h2>
        </SwiperSlide>
        {/* Item 2 */}
        <SwiperSlide>
            <h2 className="display-1 font-poppins font-semibold uppercase mb-0">
            100% Responsive
            </h2>
        </SwiperSlide>
        {/* Item 3 */}
        <SwiperSlide>
            <h2 className="display-1 font-poppins font-semibold uppercase mb-0">
            Versatile Features
            </h2>
        </SwiperSlide>
          {/* Item 4 */}
        <SwiperSlide>
            <h2 className="display-1 font-poppins font-semibold uppercase mb-0">
            WorldClass Quality
            </h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
