import Image from "next/image";
import { IoMdCompass } from "react-icons/io";

export default function Hero() {
  return (
    <div className="flex xs:flex-col justify-between w-[94%] xs:w-full mx-auto gap-12 py-24 xs:py-12  ps-16 xs:ps-6 pe-8">
      <div className="w-[35%] xs:w-full space-y-24 ">
        <h1 className="text-5xl xs:text-3xl font-semibold">
          Revolutionizing Shared{" "}
          <span className="block py-4 xs:hidden">
            <Image
              src="/images/faceEmoji.png"
              alt="Face like emoji"
              className="inline me-4"
              width={40}
              height={200}
            />
          </span>
            Property Ownership.
        </h1>
        <p className="text-lg pe-12 xs:pe-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui sed
          nam consectetur nobis, deserunt autem illo minima ex corporis vero
          eveniet, quisquam soluta accusamus. Est veritatis iusto vero in.
        </p>
        <Image
          src="/images/mountains.png"
          alt="Mountains"
          width={500}
          height={500}
          className=""
        />
      </div>

      <div className="w-[20%] xs:w-full space-y-20">
        <img src="./images/users.png" alt="Users" width={100} height={100} />
        <h2 className="text-5xl xs:text-3xl   font-semibold ms-[-10rem] xs:ms-0">Experience</h2>
        <div className="shadow-xl shadow-gray-[#222222] px-6 py-4 space-y-4 rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl w-[60%] font-semibold">
              Start my virtual tour now
            </p>
            <IoMdCompass size={40} className="compass hover:scale-110" />
          </div>
          <img src="./images/space.png" alt="" />
        </div>
        <div className="space-y-6 px-4 py-4  border-2 border-gray-200 rounded-xl">
          <img src="./images/users.png" alt="" width={100} height={100} />
          <h3 className="text-5xl font-  font-semibold">7850+</h3>
          <p className="text-md w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, ducimus.
          </p>
        </div>
      </div>
      <div className="w-[25%] xs:w-full space-y-20">
        <img src="./images/building.png" alt="" />
        <div className="flex xs:flex-col gap-6 ite border-4 border-gray-200/60 rounded-xl shadow-lg shadow-gray-[#222222] w-[100%] xs:w-full xs:h-full h-[16%] py-2 px-4">
          <Image
            src="/images/building.png"
            alt=""
            className=" w-1/4 xs:w-1/2 rounded-xl"
            width={200}
            height={200}
          />
          <div className="py-4 space-y-2">
            <h4 className="text-xl   font-semibold">Play Video</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
