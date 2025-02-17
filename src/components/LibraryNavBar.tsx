"use client";

import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import Link from "next/link";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const libraryLinks = [
    { link: "Home", destination: "/" },
    { link: "Books", destination: "/books" },
    { link: "Magazines", destination: "/mag" },
    { link: "TextBooks", destination: "/text" },
    { link: "Recommended", destination: "/rec" },
    { link: "Sales", destination: "/sales" },
  ];

  return (
    <div className="w-[90%] mx-auto border-b-2 border-gray-400">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/svg/library.svg"
            width={200}
            height={100}
            alt="Library section"
          />
        </div>
        <div className="relative w-full max-w-lg">
          <BiSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search over 30 Million books"
            className="w-full pl-12 pr-4 py-2 rounded-full outline-none border border-gray-200 focus:border-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
          />
        </div>
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-600 underline-animation"
          >
            Back To Home
          </Link>
          <IoCartOutline size={30} color="gray" />
          <BiUser size={30} color="gray" />
        </div>

      </div>
      <div>
        <ul className="flex items-center gap-4 justify-center">
          {libraryLinks.map((link, index)=>(
            <li key={index} className="text-lg font-semibold">
              <a href={link.destination}>{link.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
