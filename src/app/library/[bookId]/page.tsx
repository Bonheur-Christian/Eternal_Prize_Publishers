"use client";

import LibraryNavBar from "@/components/LibraryNavBar";
import { books } from "@/constants/Books";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiError } from "react-icons/bi";

export default function BookDetails() {
  const pathname = usePathname();

  const bookId = pathname.split("/").pop();

  const book = books.find((b) => b.bookId.toString() === bookId);

  if (!book) {
    return (
      <div>
        <div className="border-b-2 border-gray-200 sticky top-0 z-50 bg-white">
          <LibraryNavBar />
        </div>
        <div className="flex flex-col gap-24 justify-center items-center h-screen">
          <div className="flex justify-center items-center gap-6">
            <BiError size={40} className="text-blue-500" />
            <p className="text-3xl text-blue-500">Book not found</p>
          </div>
          <Link
            href="/library"
            className="bg-blue-500 hover:bg-blue-700 rounded-xl px-10 py-2 text-white text-xl font-medium"
          >
            Back To Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="border-b-2 border-gray-200 sticky top-0 z-50 bg-white">
        <LibraryNavBar />
      </div>
      <div className="flex w-[94%] mx-auto py-24 gap-10">
        <div className="space-y-6 w-[60%]">
          <Image
            src={book?.book}
            alt={book?.BookName}
            width={350}
            height={600}
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-xl font-bold font-lato text-gray-700">
                {book?.BookName}
              </h1>
              <p className="text-lg text-gray-900 font-medium font-lato">
                Author: <span className="text-gray-400">{book?.author}</span>
              </p>
              <p className="text-xl font-bold text-orange-400 font-lato">
                {book?.price}
              </p>
            </div>
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-lato font-medium text-lg px-10 py-2 rounded-lg">
              Buy
            </button>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-3xl font-bold font-montserrat">
            Debt - first 500 years
          </h1>
          <h2 className="text-gray-500">
            <span className="font-bold text-xl text-black font-montserrat">
              By
            </span>{" "}
            Jimmy MUYANGO{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            laudantium dolor corrupti ratione vitae recusandae dolorum deserunt
            animi hic ipsum omnis aliquid sunt tempora, ullam ipsam in
            consequatur eligendi cumque!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            dignissimos, unde facere, incidunt adipisci error cupiditate harum
            dolores eius perspiciatis iusto quo maxime mollitia tempore eveniet
            dolorum, natus architecto expedita.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            dolor corrupti nostrum iusto hic, suscipit autem. Pariatur
            praesentium adipisci nostrum natus voluptatum eos voluptates? Sequi
            explicabo sint laboriosam repudiandae laborum!
          </p>
        </div>
        <div className="w-full">
          {books.map((book, index) => (
            <div key={index}>
              <Image src={book.book} alt={book.BookName} width={350} height={600} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
