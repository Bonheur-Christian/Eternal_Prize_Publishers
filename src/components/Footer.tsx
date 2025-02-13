import Image from "next/image";

export default function Footer() {
  const Links = [
    { link: "Home", destination: "/" },
    { link: "About", destination: "/about" },
    { link: "Services", destination: "/services" },
    { link: "Library", destination: "/library" },
    { link: "Contacts", destination: "/contacts" },
  ];

  const Settings = [
    { setting: "Terms", destination: "/terms" },
    { setting: "Privacy", destination: "/privacy" },
    { setting: "Cookies", destination: "/cookies" },
  ];
  return (
    <div className="ps-28 pt-8 bg-black">
      <div className="w-[94%]">
        <div className="flex item-center">
          <Image
            src="/svg/footer-logo.svg"
            alt="Eternal prize Logo"
            width={200}
            height={10}
            className="ms-[-3.2rem]"
          />
          <h1 className="text-white font-bold text-2xl w-[10%] pt-6">
            Eternal Life Publishers
          </h1>
        </div>
        <div className="flex items-center justify-between border-b-2 border-white py-12">
          <ul className="flex items-center gap-12">
            {Links.map((link, index) => (
              <li key={index} className="text-white font-medium text-lg footer-underline-animation">
                <a href={link.destination}>{link.link}</a>
              </li>
            ))}
          </ul>
          <div>
            <button className="bg-white hover:bg-blue-500 hover:text-white duration-500 rounded-xl py-3 px-32 text-xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-white py-12">
          <p className="text-lg flex items-center font-semibold">
            Copyrights &copy; All Rights Reserved
          </p>
          <ul className="flex items-center gap-12">
            {Settings.map((setting, index) => (
              <li key={index} className="text-white font-medium text-lg footer-underline-animation">
                <a href={setting.destination}>{setting.setting}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
