import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

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
          delay: 40000,
        }}
      >
        <SwiperSlide>
          <div className="bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/pQNWYjL/pexels-fariphotography-905844.jpg')] text-white flex justify-center h-[50vh] md:h-[70vh] w-full lg:h-[70vh] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                Aesthetic Tableware and Decor
              </h1>
              <p className="text-2xl text-center">
                The items are arranged on a wooden surface, casting soft shadows
                that accentuate textures and designs.
              </p>
              <button className="text-xl font-bold bg-orange-700 py-4 px-6 text-white rounded-lg">
                <Link to="/all-items">View All Items</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/mNwQSwB/pexels-sankyrao90-716107.jpg')]  text-white flex justify-center h-[50vh] md:h-[70vh] w-full lg:h-[70vh] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                A Kaleidoscope of Craftsmanship
              </h1>
              <p className="text-2xl text-center">
                A vibrant display of various-sized bowls, each adorned with
                intricate patterns and colors.
              </p>
              <button className="text-xl font-bold bg-orange-700 py-4 px-6 text-white rounded-lg">
                <Link to="/all-items">View All Items</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/sj3nFsp/pexels-aliciazinn-159984.jpg')]   text-white flex justify-center w-full lg:h-[70vh] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">Creating Art</h1>
              <p className="text-2xl text-center">
                An artist, hands covered in paint, skillfully applies black or
                dark-colored paint to a wooden surface or canvas.
              </p>
              <button className="text-xl font-bold bg-orange-700 py-4 px-6 text-white rounded-lg">
                <Link to="/all-items">View All Items</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/YfQLDQh/pexels-digitalbuggu-352899.jpg')]  text-white flex justify-center w-full lg:h-[70vh] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                Traditional Textile Artistry
              </h1>
              <p className="text-2xl text-center">
                Three teapots, each with its unique pattern and color scheme,
                add visual diversity to the collection.
              </p>
              <button className="text-xl font-bold bg-orange-700 py-4 px-6 text-white rounded-lg">
                <Link to="/all-items">View All Items</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[linear-gradient(to_top,rgba(00,00,00,0.2),rgba(00,00,00,0.5)),url('https://i.ibb.co/X542FCM/victoria-berman-U-ouht-Pg-HH4-unsplash.jpg')]  text-white flex justify-center w-full h-[50vh] md:h-[70vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat ">
            <div className=" space-y-10 p-24 flex flex-col items-center justify-center">
              <h1 className="text-7xl text-center font-bold ">
                A Kaleidoscope of Craftsmanship
              </h1>
              <p className="text-2xl text-center">
                A vibrant display of various-sized bowls, each adorned with
                intricate patterns and colors.
              </p>
              <button className="text-xl font-bold bg-orange-700 py-4 px-6 text-white rounded-lg">
                <Link to="/all-items">View All Items</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
