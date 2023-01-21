import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import './Carousel.scss'
import TextDescribe  from '../../style/mymuistyle/textdescribe'
import { ThemeProvider } from '@mui/system';
import theme from '../../style/mybreakpoints'

export default function Carousel() {

  return (
    <div>
        <div className="carousel">
          <img src={process.env.PUBLIC_URL + '/svg/x.svg'} alt="" className="carousel__x" />
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
              <img className='carousel__box-slide' src={process.env.PUBLIC_URL + '/img/carouselone.jpeg'} alt="zawody indoor triathlon - pływanie"/>
            </SwiperSlide>
            <SwiperSlide>
              <img className='carousel__box-slide' src={process.env.PUBLIC_URL + '/img/carouseltwo.JPG'} alt="susz triathlon"/>
            </SwiperSlide>
        </div>
        </Swiper>
          </div>

          <div className="carousel__text">
          <ThemeProvider theme={theme}>
              <TextDescribe>
            <div>🔵Triathlon</div>
            <div>🔹1st🥇Duathlon AG Polish Championship</div>
            <div>🔹1st🥇 Aquathlon AG Polish Championship</div>
            <div>🔹4th 🇵🇱Triathlon AG European Championship </div>
            </TextDescribe>
          </ThemeProvider>
          </div>
        </div>
    </div>
  )
}
