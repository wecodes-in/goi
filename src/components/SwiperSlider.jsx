import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = ({ images, width = "w-full", height = "h-64", design = "" }) => {
  return (
    <div className={`${width} ${height} ${design}`}>
      <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
