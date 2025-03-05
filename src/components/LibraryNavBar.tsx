"use client";

import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import Link from "next/link";

export default function LibraryNavBar() {
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
    <div className="w-[90%] mx-auto border-b-2 border-slate-200 space-y-6 pt-10 pb-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          <Link href="/library">
            <Image
              src="/svg/library.svg"
              width={200}
              height={100}
              alt="Library section"
            />
          </Link>
        
          <span className="absolute top-2 right-0 w-3 h-3 bg-orange-500 rounded-full animate-pulseRing"></span>
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

        {/* User & Cart Icons */}
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

      {/* Navigation Links */}
      <div>
        <ul className="flex items-center gap-12 justify-center ">
          {libraryLinks.map((link, index) => (
            <li key={index} className="font-medium underline-animation">
              <a href={link.destination}>{link.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
