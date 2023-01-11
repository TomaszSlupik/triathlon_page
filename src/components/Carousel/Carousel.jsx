import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import './Carousel.scss'

export default function Carousel() {

  return (
    <div>
        <div className="carousel">
          <div className="carousel__box">
            
          <Swiper
     effect={"flip"}
     grabCursor={true}
     pagination={true}
     navigation={true}
     modules={[EffectFlip, Pagination, Navigation]}
     className="mySwiper"
     color="primary">
      
        <div className="carousel__box-slide">
            <SwiperSlide>
              <img className='carousel__box-slide' src={process.env.PUBLIC_URL + '/img/carouselone.jpeg'} />
            </SwiperSlide>
            <SwiperSlide>
              <img className='carousel__box-slide' src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='carousel__box-slide' src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='carousel__box-slide' src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='carousel__box-slide' src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
        </div>
        </Swiper>
          </div>

          <div className="carousel__text">
            <div>🔵Triathlon</div>
            <div>🔹1st🥇Duathlon AG Polish Championship</div>
            <div>🔹1st🥇 Aquathlon AG Polish Championship</div>
            <div>🔹4th 🇵🇱Triathlon AG European Championship </div>
          </div>
        </div>
    </div>
  )
}
