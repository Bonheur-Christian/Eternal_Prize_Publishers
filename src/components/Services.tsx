"use client";

import { FaBookOpenReader } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Service() {
  const services = [
    {
      service: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
  ];

  return (
    <div className="relative py-12 w-[94%] ps-16">
      <h1 className="text-5xl font-bold ps-16">Our Services</h1>
      <div className="flex "></div>
      <Swiper
        className=" left-0 right-32 flex justify-end gap-8 px-6 mt-24 z-10 pb-32 custom-swiper"
        spaceBetween={30}
        centeredSlides={false}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Autoplay, Pagination]}
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="text-center bg-white space-y-12 w-[20%] rounded-xl py-16 px-6 shadow-lg hover:-translate-y-12 duration-500"
          >
            <FaBookOpenReader className="mx-auto" size={30} color="orange" />
            <h1 className="text-3xl text-[#5AA3E8] font-bold">
              {service.service}
            </h1>
            <p>{service.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
