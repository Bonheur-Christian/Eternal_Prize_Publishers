"use client";

import React, { useState } from "react";

interface DropDownProps {
  contents: string[];
}

const Dropdown = ({ contents }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative pt-2 z-10">
      <button
        className="text-gray-500"
        onClick={toggleDropdown}
      >
        <svg
          className={`ml-2 h-5 w-5 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.71.29l7 7a1 1 0 01-1.42 1.42L10 5.41 3.71 11.71a1 1 0 11-1.42-1.42l7-7A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 lg:w-[20vw] sm:w-[80vw] origin-top-left bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none transition-all duration-300 ease-in-out transform  scale-100">
          <div className="py-1">
            {contents.map((item, index) => (
              <ul key={index}>
                <li className="block px-4 py-4 text-gray-700 hover:bg-sky-100 hover:border-s-4 border-sky-800 duration-100">
                  {item}
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
