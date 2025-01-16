// components/MySwiper.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional: Navigation styles
import 'swiper/css/pagination'; // Optional: Pagination styles
import { Navigation, Pagination } from 'swiper/modules';

const Featured: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]} // Include Swiper modules
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible
      navigation // Enable navigation (prev/next buttons)
      pagination={{ clickable: true }} // Enable pagination (dots)
      loop={true} // Enable loop
    >
      <SwiperSlide>
        <img src="/images/slide1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slide3.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Featured;
