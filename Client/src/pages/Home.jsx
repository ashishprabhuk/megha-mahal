import React from "react";
import Content from "../Components/Content";
import Carousel from "../Components/Carousel";
import Contact from "../Components/Contact";
import CardSwiper from "../Components/CardSwiper"

export default function Home() {
  
  return (
    <>
      <div>
        <Content />
        {/* <CardSwiper/> */}
        <Carousel />
        <Contact/>
      </div>
    </>
  );
}
