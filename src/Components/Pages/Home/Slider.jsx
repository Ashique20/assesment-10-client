import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-[700px]'   src="https://images6.alphacoders.com/122/1224149.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[700px]' src="https://i.etsystatic.com/41465127/r/il/10c8a9/4807685781/il_fullxfull.4807685781_4li2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[700px]' src="https://i.pinimg.com/736x/78/62/bb/7862bb3aa69a428d80f87bf208beb43e.jpg" alt="" /></SwiperSlide>
       
            </Swiper>
        </>
    );
}
