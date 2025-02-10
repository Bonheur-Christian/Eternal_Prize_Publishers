import Image from "next/image";

export default function NavBar() {
  const Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Library", path: "/library" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="top-0 sticky bg-white z-50">
      <nav className="flex items-center justify-between px-10 py-6  border-b-2 border-b-[#D1F2F5]/30">
        <div className="mx-12">
          <a href="/">
            <Image
              src="./svg/logo.svg"
              alt="Logo of the company"
              width={100}
              height={2}
            />
          </a>
        </div>
        <div className="">
          <ul className="flex justify-center gap-12 items-center">
            {Links.map((item, index) => (
              <li key={index} className="underline-animation">
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
            <button className="px-4 py-2 bg-[#1A58F7] hover:bg-blue-700 hover:text-gray-200 text-white rounded-md mx-12 font-Lato font-medium">
              Get Library
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
