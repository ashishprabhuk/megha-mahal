import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from '../data';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {

  return (
    <>
      <div className="carousel-box">
        <h2></h2>
        <Swiper
          style={{
            "--swiper-navigation-color": "#733646",
            "--swiper-pagination-color": "#733646",
          }}
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="mySwiper"
        >
          {images.map((data, index) => {
            return (
              <SwiperSlide key={index} className="carousel-slide">
                <img src={data.src} alt={data.id} className="slider-img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
