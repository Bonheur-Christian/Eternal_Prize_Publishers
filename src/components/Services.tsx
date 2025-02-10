import { FaBookOpenReader } from "react-icons/fa6";

export default function Service() {
  const services = [
    {
      service: "Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
    {
      service: "Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis Sed quis nisl vitae leo sagittis mattis]",
    },
  ];
  return (
    <div>
      <div className=" bg-[#ACD4F9] rounded-xl w-[80%] ms-[18rem] my-12 h-[30%]">
        <div className=" flex py-12  justify-end gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" text-center bg-white space-y-12 w-[20%] rounded-xl py-6 px-6"
            >
              <FaBookOpenReader className="mx-auto" size={30} color="orange"/>
              <h1 className="text-3xl text-[#5AA3E8] font-bold">
                {service.service}
              </h1>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
