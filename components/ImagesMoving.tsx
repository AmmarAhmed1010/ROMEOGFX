"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function ImagesMoving() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (1).jpg" alt="Thumbnail 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (2).jpg" alt="Thumbnail 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (3).jpg" alt="Thumbnail 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (4).jpg" alt="Thumbnail 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (5).jpg" alt="Thumbnail 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (6).jpg" alt="Thumbnail 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (7).jpg" alt="Thumbnail 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (8).jpg" alt="Thumbnail 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/thumbnail/thumbnail (9).jpg" alt="Thumbnail 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
