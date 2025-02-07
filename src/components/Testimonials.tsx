"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Dian Fossey",
    role: "Accountant",
    image: "/profile.jpg",
    text: "Dian Fossey is an expert accountant with over 10 years of experience in financial management.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Designer",
    image: "/profile.jpg",
    text: "Jane Doe is a creative designer specializing in UI/UX with a keen eye for detail.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Developer",
    image: "/profile.jpg",
    text: "John Smith is a skilled full-stack developer with expertise in modern JavaScript frameworks.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "Marketing Specialist",
    image: "/profile.jpg",
    text: "Alice Johnson is a marketing specialist with a passion for digital campaigns and branding.",
  },
];

const Testimonial = () => {
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

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-14 p-10 bg-gray-50">
      {/* Left: Testimonial Cards */}
      <div className="relative flex flex-col gap-6 w-[350px]">
        {testimonials.slice(0, 3).map((testimonial, index) => {
          const isActive = index === selectedIndex;
          return (
            <motion.div
              key={testimonial.id}
              onClick={() => handleSelect(index)}
              className={`w-full p-5 bg-white shadow-lg rounded-lg flex items-center space-x-4 cursor-pointer transition-all duration-500 ${
                isActive
                  ? "scale-110 shadow-2xl border border-blue-500 translate-x-4" // Indented active card
                  : "opacity-80"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline Divider */}
      <div className="h-[200px] w-1 bg-gray-300 rounded-full hidden md:block"></div>

      {/* Right: Display Selected Testimonial */}
      <motion.div
        key={testimonials[selectedIndex].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-600 max-w-md"
      >
        <span className="text-blue-500 text-3xl">❝</span>
        <p className="text-lg">{testimonials[selectedIndex].text}</p>
        <div className="flex gap-1 mt-3 text-blue-500">
          ⭐⭐⭐⭐⭐
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
