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
              <BiError size={40} className="text-blue-500"/>
              <p className="text-3xl text-blue-500">Book not found</p>
            </div>
            <Link href="/library" className="bg-blue-500 hover:bg-blue-700 rounded-xl px-10 py-2 text-white text-xl font-medium">Back To Library</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b-2 border-gray-200 sticky top-0 z-50 bg-white">
        <LibraryNavBar />
      </div>
      <div className="flex">
        <div>
          <Image
            src={book?.book}
            alt={book?.BookName}
            width={350}
            height={600}
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
