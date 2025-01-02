"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery: React.FC = () => {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
  ];

  return (
    <section className="py-12">
      <div className="w-full md:w-11/12 px-4 mx-auto">
        <h2 className="md:text-center mb-1 text-2xl lg:text-4xl font-bold text-gray-800 capitalize">
          We buy <span className="text-primary">Fords</span> in any condition
        </h2>
        <p className="md:text-center mb-5 text-base lg:text-xl font-bold text-gray-600">
          KA | FOCUS | KUGA | FIESTA | CMAX | CONNECT | ECOSPORT | PUMA | BMAX
        </p>
        <div className="hidden lg:grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {images.map((src, index) => (
            <div key={index} className="relative pb-[100%] overflow-hidden">
              <img
                src={src}
                alt={`Ford ${index + 1}`}
                className="absolute h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative pb-[100%] overflow-hidden">
                  <img
                    src={src}
                    alt={`Ford ${index + 1}`}
                    className="absolute h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
