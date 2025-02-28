import Books from "@/components/Book";
import Dropdown from "@/components/DropDown";
import Footer from "@/components/Footer";
import LibraryNavBar from "@/components/LibraryNavBar";
import LibrarySideBar from "@/components/LibrarySideBar";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Library() {
  return (
    <div>
      <div className="border-b-2 border-gray-200 sticky top-0 z-50 bg-white">
        <LibraryNavBar />
      </div>
      <div className="w-[90%] mx-auto py-6 pb-64">
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

          <div>
            <div className="flex justify-between items-center py-10">
              <div className="flex items-center gap-2">
                <p>Shop By</p>
                <Dropdown
                  contents={[
                    "Newest Books",
                    "Trending",
                    "Old Books",
                    "Year Of Release",
                  ]}
                />
              </div>
              <div className="flex items-center gap-2 ">
                <CgMenuGridO size={30} color="gray" />
                <TfiMenuAlt size={30} className="text-gray-400"/>
              </div>
            </div>
            <Books />
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
