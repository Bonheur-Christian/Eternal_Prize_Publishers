import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="ps-32  xs:ps-6 py-24 space-y-24">
      <h1 className="text-5xl xs:text-2xl font-bold ">Contacts</h1>
      <div className="flex xs:flex-col items-center gap-32">
        <div className="space-y-8 py-16 px-10 shadow-sm rounded-xl border-2 border-gray-50 w-[25%] xs:w-full">
          <div className="space-y-4  border-b-2  border-gray-200 pb-8">
            <div className="flex items-center gap-4">
              <FiPhoneCall
                className="bg-blue-500 rounded-full text-white p-2"
                size={42}
              />
              <p className="text-2xl font-semibold tracking-tighter">
                Call To Us
              </p>
            </div>
            <p className="font-medium">
              We are available 24/7, 7 days a week,{" "}
            </p>
            <p className="font-medium">Phone: +250 795680055</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <AiOutlineMail
                className="bg-blue-500 rounded-full text-white p-2"
                size={40}
              />
              <p className="text-2xl font-semibold tracking-tighter">
                Write To Us
              </p>
            </div>
            <p className="font-medium">
              Fill out the form and we will contact you with in 24 hours
            </p>
            <p className="font-medium">Email: customer@eternalprize.rw</p>
            <p className="font-medium">Email: support@eternalprize.rw</p>
          </div>
        </div>
        <div className="space-y-6 w-[45%] shadow-sm py-16 px-10 rounded-xl border-2 border-gray-50">
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Your Name * "
              autoFocus
              className="text-gray-800 font-semibold outline-none py-4 px-4 bg-gray-100 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="text-gray-800 font-semibold outline-none py-4 px-4 bg-gray-100 rounded-lg w-full"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="text-gray-800 font-semibold outline-none py-4 px-4 bg-gray-100 rounded-lg w-full"
            />
          </div>
          <div className="">
            <textarea
              name="message"
              id="message"
              rows={8}
              className="text-gray-800 font-semibold outline-none py-2 px-4 bg-gray-100 rounded-lg w-full"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 rounded-xl px-6 py-4 font-medium text-lg hover:bg-blue-700 text-white">
              Sends Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
