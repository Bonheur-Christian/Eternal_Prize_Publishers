"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Library", path: "/library" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="top-0 sticky bg-white z-50 sm:overflow-x-auto">
      <nav className="flex items-center justify-between  xs:ps-0 px-10 py-6  border-b-2 border-b-[#D1F2F5]/30">
        <div className="lg:mx-12 sm:mx-0">
          <a href="/">
            <Image
              src="./svg/logo.svg"
              alt="Logo of the company"
              width={100}
              height={2}
              className="xs:w-1/2"
            />
          </a>
        </div>
        <div className="xs:w-full relative">
            <ul
            className={`${
              isOpen
                ? "bg-white sm:px-4 xs:py-12 xs:ps-2 xs:pe-64 xs:space-y-6 md:ms-[12rem] xs:ms-0 md:bg-white md:w-[100vw] xs:w-[10vw] sm:py-4  lg:w-[100vw] xs:min-h-screen z-50 top-[-3.5rem] xs:text-lg xs:font-medium "
                : "hidden duration-1000"
            } lg:flex lg:space-x-12 sm:space-y-4 lg:space-y-0 md:space-y-4  lg:top-5 absolute`}
          >
            {Links.map((item, index) => (
              <li key={index} className="underline-animation">
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
            <button className="xs:px-10 xs:text-start px-4 py-2 bg-[#1A58F7] hover:bg-blue-700 hover:text-gray-200 text-white rounded-md mx-12 xs:mx-0 font-Lato font-medium">
              Get Library
            </button>
          </ul>
        </div>
        <div
          onClick={toggleMenu}
          className="sm:block lg:hidden sm:pb-6 sm:pt-4 duration-700"
        >
          {isOpen ? (
            <IoCloseSharp className="text-4xl duration-700" />
          ) : (
            <IoMdMenu className="text-4xl duration-700" />
          )}
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
