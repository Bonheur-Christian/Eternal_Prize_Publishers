import Image from "next/image";
import Testimonial from "./Testimonials";

export default function Records() {
  const recentBooks = [
    {
      image: "/images/space.png",
      title: "Seek For Eternal Life",
      description:
        " Nulla ac dictum nunc, in ultricies ex. Integer id elit sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dictum nunc, in ultricies ex. Integer id elit sollicitudin",
    },
    {
      image: "/images/space.png",
      title: "Seek For Eternal Life",
      description:
        "Nulla ac dictum nunc, in ultricies ex. Integer id elit sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dictum nunc, in ultricies ex. Integer id elit sollicitudin",
    },
    {
      image: "/images/space.png",
      title: "Seek For Eternal Life",
      description:
        " Nulla ac dictum nunc, in ultricies ex. Integer id elit sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dictum nunc, in ultricies ex. Integer id elit sollicitudin",
    },
  ];

  return (
    <div className="bg-[#5EDBDB]/10 ps-16 xs:ps-4 mt-10 py-12 ">
      <div className="w-[94%] xs:w-full ps-16 ">
        <h1 className="text-5xl font-semibold">Tracking Our Records</h1>
        <div className="flex xs:flex-col py-24">
          <div className="w-[70%] space-y-4">
            <Image
              width={800}
              height={700}
              src={"/images/building2.png"}
              alt=""
            />
            <p className="text-2xl font-semibold">
              Seeking Professional Financial Advice Guidance
            </p>
            <p className="w-[80%] py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              aliquam praesentium? Consequuntur quia asperiores repellendus
              eaque cupiditate, maiores voluptas id incidunt officia numquam
              ducimus similique odit ullam? Minima, animi recusandae.
            </p>
          </div>
          <div className="w-[60%] xs:w-full space-y-10">
            {recentBooks.map((book, index) => (
              <div className="flex  xs:flex-col items-center gap-6" key={index}>
                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={200}
                />
                <div className="space-y-2">
                  <p className="text-2xl font-medium">{book.title} </p>
                  <p className="">{book.description}</p>
                  <button className="border-2 border-gray-600 px-6 py-2 rounded-xl font-medium">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-12" >
          <div>
            <h2 className="text-[#3B9DF8] text-xl font-semibold text-center">
              Some Reviews{" "}
            </h2>
            <p
              className="text-4xl font-bold text-center"
              style={{ fontFamily: "montserrat" }}
            >
              By Our Client
            </p>
          </div>
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
