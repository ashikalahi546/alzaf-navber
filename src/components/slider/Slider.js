"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
// import required modules

const Slider = () => {
  return (
    <div className="mx-20 mt-4 relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className="h-[355px]"
            src="/images/slider-banner.png"
            width={2000}
            height={355}
            alt="loading"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image className="h-[355px]"
            src="/images/slider-banner.png"
            width={2000}
            height={355}
            alt="loading"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="h-[355px]"
            src="/images/slider-banner.png"
            width={2000}
            height={355}
            alt="loading"
          />
        </SwiperSlide>
      </Swiper>
    <div className="absolute top-0 z-20 left-[17%]">
    <Menu/>
    </div>
    </div>
  );
};

export default Slider;
