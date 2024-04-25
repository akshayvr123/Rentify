import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import './Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import car from '../../../assets/Banner/CAR.png'
import GAMING from '../../../assets/Banner/GAMING.png'
import PowerTool from '../../../assets/Banner/powertools.png'
import Furniture from '../../../assets/Banner/FURUNITURE.png'
import ELECTRONIC from '../../../assets/Banner/ELECTRONIC.png'
import HOUSE from '../../../assets/Banner/HOUSE.png'
import HOMEAPPLIANCES from '../../../assets/Banner/HOMEAPPLIANCES.png'



const Slider = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide><img src={car} alt="" /></SwiperSlide>
      <SwiperSlide><img src={GAMING} alt="" /></SwiperSlide>
      <SwiperSlide><img src={PowerTool} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Furniture} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ELECTRONIC} alt="" /></SwiperSlide>
      <SwiperSlide><img src={HOUSE} alt="" /></SwiperSlide>
      <SwiperSlide><img src={HOMEAPPLIANCES} alt="" /></SwiperSlide>
    
   
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
    <hr id='slider_line'/>
  </>
  )
}

export default Slider