import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay} from "swiper";
import './Resultcarousel.scss'

export default function Resultcarousel() {
  return (
    <div>
        <div className="resultcarousel">

        </div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}      
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={process.env.PUBLIC_URL + '/img/resultone.JPG'} alt="ME - bieg" className="resultcarousel__img"/>
            <div className="resultcarousel__signature">Foto. startlist.pl</div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + '/img/resulttwo.JPG'} alt="Pływanie - indoor Triathlon" className="resultcarousel__img"/>
        <div className="resultcarousel__signature">Foto. Agnieszka Weremczuk</div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + '/img/resultthree.JPG'} alt="Pływanie - HP" className="resultcarousel__img"/>
        <div className="resultcarousel__signature">Foto. Agnieszka Weremczuk</div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + '/img/resultfive.JPG'} alt="Członek kadry narodowej" className="resultcarousel__img"/>
        </SwiperSlide>
      
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + '/img/resultfour.JPG'} alt="Pływanie - HP" className="resultcarousel__img"/>
        <div className="resultcarousel__signature">Foto. LOTTO Duathlon Energy</div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
