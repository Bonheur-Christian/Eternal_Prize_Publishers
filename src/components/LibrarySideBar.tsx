"use client";

import { useState } from "react";

export default function LibrarySideBar() {
  const Categories = [
    { category: "All Genres", link: "/" },
    { category: "Arts & Photography", link: "/" },
    { category: "Biographics & Member", link: "/" },
    { category: "Children's Books", link: "/" },
    { category: "Cook Books , Food", link: "/" },
    { category: "History", link: "/" },
    { category: "Literature & Fiction", link: "/" },
    { category: "Romance", link: "/" },
    { category: "Sci-Fi & Fantasy", link: "/" },
    { category: "Teen & Young Adults", link: "/" },
  ];

  const BookFormats = [
    { format: "HardCover", link: "/" },
    { format: "PaperBack", link: "/" },
    { format: "Electronic Book", link: "/" },
    { format: "LargePrint", link: "/" },
  ];
  return (
    <div className="space-y-4 py-4">
      <h1 className="text-lg font-bold text-gray-700">Shop By Category</h1>
      <div className="pl-6">
        <ul className="space-y-4">
          {Categories.map((category, index) => (
            <li key={index} className="text-gray-600 font-medium">
              <a href={category.link}>{category.category}</a>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-lg font-bold text-gray-700">Book Format</h2>
      <div className="pl-6">
        <ul className="space-y-4">
          <li className="font-semibold text-[#3B9DF8]">
            <a href="/">All Formats</a>
          </li>
          {BookFormats.map((format, index) => (
            <li key={index} className="text-gray-600 font-medium pl-6">
              <a href={format.link}>{format.format}</a>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-lg font-bold text-gray-700">Price Range</h3>
      <RangeSlider />
    </div>
  );
}

const RangeSlider: React.FC = () => {
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(1200);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-md">
        <input
          type="range"
          min="50"
          max="1200"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
          className="absolute w-full h-2 bg-blue-500 rounded-full appearance-none cursor-pointer thumb-custom"
        />
        <input
          type="range"
          min="50"
          max="1200"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer thumb-custom"
        />
      </div>
      <div className="flex justify-between w-full max-w-md mt-4 text-gray-700 font-semibold py-2">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
};
