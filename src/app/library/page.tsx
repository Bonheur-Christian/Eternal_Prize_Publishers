import Books from "@/components/Book";
import LibraryNavBar from "@/components/LibraryNavBar";
import LibrarySideBar from "@/components/LibrarySideBar";
import Link from "next/link";

export default function Library() {
  return (
    <div>
      <div className="border-b-2 border-gray-200">
        <LibraryNavBar />
      </div>
      <div className="w-[90%] mx-auto py-6">
        <div className="font-medium">
          <Link href="/" className="text-gray-700">
            Home /
          </Link>
          <Link href="/books" className="text-[#3B9DF8] ">
            Books{" "}
          </Link>
        </div>
        <div className="flex gap-36">
          <LibrarySideBar />
          <Books />
        </div>
      </div>
    </div>
  );
}
