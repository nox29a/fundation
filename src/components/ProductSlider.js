import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


import sliderimg from "../img/rozaniec.jpg";
import sliderimg2 from "../img/torba.jpg";
import sliderimg3 from "../img/torba2.jpg";
import sliderimg4 from "../img/rozaniec2.jpg";
import sliderimg5 from "../img/rozaniec3.jpg";
import sliderimg6 from "../img/torba2.jpg";

const sliderData = [
  {
    img: sliderimg,
    price: 30
  },
  {
    img: sliderimg2,
    price: 20
  },
  {
    img: sliderimg3,
    price: 40
  },
  {
    img: sliderimg4,
    price: 120
  },
  {
    img: sliderimg5,
    price: 182
  },
  {
    img: sliderimg6,
    price: 99
  },
];

const ProductSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      className=""
      slidesPerView={3}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="">
                <img className="border-2 h-[300px] cursor-pointer" src={slide.img} alt=""></img>
                <div className='absolute text-purple-800 text-[12px] font-extrabold uppercase bottom-20 right-32 px-2 rounded-full z-10 border-2 bg-yellow-400 border-purple-800'>{slide.price} PLN</div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;