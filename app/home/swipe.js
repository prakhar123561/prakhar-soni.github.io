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
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        speed={500}
       
        modules={[Autoplay, Navigation, Pagination]}
        breakpoints={{
          // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 800px
        800: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3.5,
          spaceBetween: 60
        },
        // when window width is >= 11200px
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 60
        },
        // when window width is >= 11200px
        1400: {
          slidesPerView: 4.5,
          spaceBetween: 60
        }
        }}
      >
        {/* Item 1 */}
        <SwiperSlide className='min-w-min'>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              Clean code, fast support and a beautiful and very customizable
              theme quickly and easily. Beautiful! I recommend the purchase!
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">
              mariangela_wp
            </h4>
            <span className="sm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
        </SwiperSlide>
        {/* Item 2 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              Great, great, great. It is really easy to work with. The code
              you receive is actually made for you. It only has what you need,
              nothing more..
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">altayevrim</h4>
            <span className="sm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
        </SwiperSlide>
        {/* Item 3 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              I love everything about this template. Clean Design, Amazing
              documentation and a bunch of features.
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">
              rainer_arencibia
            </h4>
            <span className="sm-heading tsm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
          </SwiperSlide>
          {/* Item 4 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              It was difficult to choose just one main reason for my 5 star
              rating as they are all applicable. The template is flexible,
              clean, easy to modify, etc.
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">SFMagpie</h4>
            <span className="sm-heading tsm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
        </SwiperSlide>
        {/* Item 5 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              This is an easy-to-use, easy-to-modify, versatile theme with
              excellent customer support. And the price is right!
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">
              cominginsecond
            </h4>
            <span className="sm-heading tsm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
        </SwiperSlide>
        {/* Item 6 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              I can already see this is a lovely theme, with a huge amount of
              options which are all clearly categorized &amp; presented. Easy
              to understand and edit to suit one&apos;s needs.
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">
              hracaligari
            </h4>
            <span className="sm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
        </SwiperSlide>
        {/* Item 7 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex-col p-4 p-md-5 rounded-xl">
            <div className="mb-3">
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }} />
            </div>
            <p className="text-black-700">
              Very sleek and pleasant design! Makes my website look very
              professional. Easy to use elements. Support is very responsive
              and helpful! Excellent support.
            </p>
            <h4 className="font-bold text-black-700 mt-4 mb-1">Leogazmic</h4>
            <span className="sm-heading text-black-500 uppercase">
              ThemeForest user
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
