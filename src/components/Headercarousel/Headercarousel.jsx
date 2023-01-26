import React from 'react'
import './Headercarousel.scss'

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


export default function Headercarousel() {

const imageCarousel = [
  {
    nav: '/img/headerone.JPG',
    alt: 'Bieg - Mistrzostwa Europy'
  }, 
  {
    nav: '/img/headertwo.JPG', 
    alt: 'Kolarstwo - Wyścig sprint w Gdyni'
  }, 
  {
    nav: '/img/headerthree.JPG', 
    alt: 'Wygrana - championman'
  }, 
]

  return (
    <div>
        <div className="swiper">
            <div className="swiper__box">
            <Swiper
            navigation={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 2 : 4}
            loop={true}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
            }}
            pagination={{
            clickable: true
            }}
            className="swiper__box"
            >
           
              {
                imageCarousel.map((el) => {
                  return  (
                    <div>
                    <SwiperSlide className='swiper__box-wraper'>
                        <img className='swiper__box-wraper--img' src={process.env.PUBLIC_URL + el.nav} />
                    </SwiperSlide>
                  </div>
                  
                  )
                })
              }
            </Swiper>
            </div>
        </div> 
    </div>
  )
}
