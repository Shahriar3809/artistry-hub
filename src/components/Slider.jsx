import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="z-10 mt-5">
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/pQNWYjL/pexels-fariphotography-905844.jpg')] text-blue-500 flex justify-center h-[50vh] md:h-[70vh] w-full lg:h-[70vh] bg-cover bg-center bg-no-repeat "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/mNwQSwB/pexels-sankyrao90-716107.jpg')] text-blue-500 flex justify-center h-[50vh] md:h-[70vh] w-full lg:h-[70vh] bg-cover bg-center bg-no-repeat "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/sj3nFsp/pexels-aliciazinn-159984.jpg')] text-blue-500 flex justify-center w-full lg:h-[70vh] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/YfQLDQh/pexels-digitalbuggu-352899.jpg')] text-blue-500 flex justify-center w-full lg:h-[70vh] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/X542FCM/victoria-berman-U-ouht-Pg-HH4-unsplash.jpg')] text-blue-500 flex justify-center w-full h-[50vh] md:h-[70vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat "></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
