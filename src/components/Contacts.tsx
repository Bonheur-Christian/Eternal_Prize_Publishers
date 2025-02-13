import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="ps-32 py-6">
      <h1 className="text-5xl font-bold ">Contacts</h1>
      <div className="flex items-center">
        <div className="space-y-8 py-16 px-6 shadow-md rounded-xl border-2 border-gray-100 w-[20%]">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FiPhoneCall  className="bg-blue-500 rounded-full text-white p-2" size={42}/>
              <p className="text-2xl font-semibold tracking-tighter">Call To Us</p>
            </div>
            <p className="font-medium">We are available 24/7, 7 days a week, </p>
            <p className="font-medium">Phone: +250 795680055</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <AiOutlineMail className="bg-blue-500 rounded-full text-white p-2" size={40}/>
              <p  className="text-2xl font-semibold tracking-tighter">Write To Us</p>
            </div>
            <p className="font-medium">Fill out the form and we will contact you with in 24 hours</p>
            <p className="font-medium">Email: customer@eternalprize.rw</p>
            <p className="font-medium">Email: support@eternalprize.rw</p>
          </div>
        </div>
      </div>
    </div>
  );
}
