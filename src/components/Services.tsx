"use client";

import { FaBookOpenReader } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiDownArrow } from "react-icons/bi";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

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
    <div className="py-12 w-[94%] ps-16">
      <h1 className="text-5xl font-bold ps-16">Our Services</h1>
      <div className="flex "></div>
      <div className="ps-16 pb-52">
        <Swiper
          className="flex justify-end gap-8  mt-24"
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="border-2 border-gray-200 text-center space-y-12 rounded-xl py-24 px-6  hover:scale-105 duration-500 z-50"
            >
              <FaBookOpenReader className="mx-auto" size={30} color="orange" />
              <h1 className="text-3xl text-[#5AA3E8] font-bold">
                {service.service}
              </h1>
              <p>{service.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end items-center gap-2 py-6 ">
          <Link href="" className="text-md font-medium text-orange-500 hover:underline duration-500">
            View More
          </Link>
          <BiDownArrow size={15} color="orange"/>

        </div>
      </div>

      <div className="ps-16 flex justify-between py-6">
        <div className="w-[60%] space-y-8">
          <h1 className="text-4xl font-bold">Library</h1>
          <p className="text-4xl font-bold">
            Make Your Work Flow Faster And Easy To Understand Plus Simple And
            Efficient Working With.
          </p>
          <p className="text-lg">
            Sed quis nisl vitae leo sagittis mattis. Fusce id lacus sit amet
            eros tincidunt aliquet.ed quis nisl vitae leo sagittis mattis. Fusce
            id lacus sit amet eros tincidunt aliquetSed quis nisl vitae leo
            sagittis mattis. Fusce id lacus sit amet eros tincidunt aliquet.
          </p>
          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-blue-500 border-2 border-blue-500 text-white px-4 py-2 font-semibold outline-none">
              Get Started
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-xl text-lg border-2 border-gray-200 font-semibold outline-none">
              Explore More
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/images/book.png"
            alt="Book svg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
