"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dian Fossey",
    role: "Accountant",
    image: "/images/profile.png",
    text: "Dian Fossey is an expert accountant with over 10 years of experience in financial management.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Designer",
    image: "/images/profile.png",
    text: "Jane Doe is a creative designer specializing in UI/UX with a keen eye for detail.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Developer",
    image: "/images/profile.png",
    text: "John Smith is a skilled full-stack developer with expertise in modern JavaScript frameworks.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "Marketing Specialist",
    image: "/images/profile.png",
    text: "Alice Johnson is a marketing specialist with a passion for digital campaigns and branding.",
  },
];

export default function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual selection
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  // Get the testimonials to display
  const getDisplayedTestimonials = () => {
    const start = selectedIndex;
    const end = selectedIndex + 3;
    if (end <= testimonials.length) {
      return testimonials.slice(start, end);
    } else {
      return [
        ...testimonials.slice(start),
        ...testimonials.slice(0, end - testimonials.length),
      ];
    }
  };

  return (
    <div className="flex xs:flex-col items-center justify-around w-[94%] xs:w-full space-y-12  gap-32 xs:gap-2 py-16 xs:ps-[-2rem]">
      <div className="flex flex-col gap-6 w-[350px] xs:w-[100px] xs:ms-[-100px]">
        {getDisplayedTestimonials().map((testimonial, index) => {
          const isActive = index === 0;
          return (
            <motion.div
              key={testimonial.id}
              onClick={() =>
                handleSelect((selectedIndex + index) % testimonials.length)
              }
              className={`w-full p-5 xs:p-4 shadow-lg rounded-lg flex  items-center space-x-4 xs:space-x-12 cursor-pointer transition-all duration-1000 ${
                isActive
                  ? "scale-110 shadow-2xl border border-blue-500 translate-x-4 z-10"
                  : "opacity-80"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 xs:w-full h-14 xs:h-full   rounded-full"
                width={200}
                height={200}
              />
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="h-[400px] w-1 bg-gray-300 rounded-full hidden md:block"></div>

      <motion.div
        key={testimonials[selectedIndex].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-600 max-w-md"
      >
        <span className="text-blue-500 text-3xl">❝</span>
        <p className="text-lg">{testimonials[selectedIndex].text}</p>
        <div className="flex gap-1 mt-3 text-blue-500">⭐⭐⭐⭐⭐</div>
      </motion.div>
    </div>
  );
}
