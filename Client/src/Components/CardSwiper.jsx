import React from "react";
import { images } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./CardSwiper.css";

import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <div className="swiper-box">
      <div >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="cardSwiper"
          loop={true}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="swiper-slider">
              <img src={image.src} alt={image.alt} className="swiper-image " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
