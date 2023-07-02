import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { MdPhoneEnabled, MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
export default function Contact() {
  return (
    <div>
      <div className="bg-white">
        <Navbar />{" "}
      </div>
      <div className="py-20 bg-contact  relative h-96">
        <div className="absolute top-0 left-0 h-full w-full bg-black/30 ">
          <div className="max-w-6xl mx-auto mt-32 text-white font-medium px-5">
            <h1 className=" font-black text-3xl mb-5">CONTACT US </h1>
            <p className=" mb-5">Get in Touch with Our Accounting Experts</p>
            <Link href={"/"}>HOME</Link>
            <HiChevronRight className="mx-5 fill-white inline" />
            <Link href={"/contact"}>CONTACT</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-20">
        <div className="max-w-6xl mx-auto flex lg:flex-nowrap flex-wrap lg:gap-20 gap-16">
          <div className="lg:basis-1/2 basis-full flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-8 lg:text-left text-center">
                Get a Free <br />{" "}
                <span className="text-lime-custom">Quote</span> Today
              </h1>
              <p className="mb-8 text-justify lg:px-0 px-5">
                We are delighted to offer you the opportunity to receive a free
                quote for our exceptional accounting services. Our dedicated
                team of professionals is ready to assist you in managing your
                financial needs effectively. Whether you require assistance with
                tax preparation, bookkeeping, financial analysis, or any other
                accounting services, we are here to help.
              </p>
            </div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 lg:mx-0 mx-auto gap-5">
              <div className="flex md:flex-row flex-col gap-6 items-center mb-12">
                <div className="w-16 h-16 rounded-full bg-[#ADDB74] flex items-center justify-center">
                  <MdPhoneEnabled className="w-8 h-8" />
                </div>
                <div className="font-medium md:text-left text-center">
                  <h6>Phone</h6>
                  <p>+076 0933 475</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col  gap-6 items-center mb-12">
                <div className="w-16 h-16 rounded-full bg-[#ADDB74] flex items-center justify-center">
                  <MdEmail className="w-8 h-8" />
                </div>
                <div className="font-medium md:text-left text-center">
                  <h6>Email</h6>
                  <p>+076 0933 475</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-6 items-center mb-12">
                <div className="w-16 h-16 rounded-full bg-[#ADDB74] flex items-center justify-center">
                  <IoMdPin className="w-8 h-8" />
                </div>
                <div className="font-medium md:text-left text-center">
                  <h6>Address</h6>
                  <p>Cape Town, SA</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-6 items-center mb-12">
                <div className="w-16 h-16 rounded-full bg-[#ADDB74] flex items-center justify-center">
                  <FaFax className="w-8 h-8" />
                </div>
                <div className="font-medium md:text-left text-center">
                  <h6>Fax</h6>
                  <p>+076 0933 475</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2 basis-full">
            <form action="" className="mx-10">
              <label htmlFor="fullName" className="font-medium mb-2 block">
                Name
              </label>
              <input
                className=" py-2 px-4 w-full rounded-lg border-black border outline-none focus:outline-none mb-4"
                placeholder="Full Name"
                id="fullName"
                name="fullName"
              />
              <label htmlFor="email" className="font-medium mb-2 block">
                Email
              </label>
              <input
                className=" py-2 px-4 w-full rounded-lg border-black border outline-none focus:outline-none  mb-4"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
              <label htmlFor="phone" className="font-medium mb-2 block">
                Phone
              </label>
              <input
                className=" py-2 px-4 w-full rounded-lg border-black border outline-none focus:outline-none  mb-4"
                id="phone"
                name="phone"
                placeholder="+923140000000"
              />
              <label htmlFor="interest" className="font-medium mb-2 block">
                {"I'm interested in"}
              </label>
              <select
                name="interest"
                id="interest"
                className=" py-2 px-4 w-full rounded-lg border-black border outline-none focus:outline-none  mb-4"
              >
                <option value="taxation">Taxation</option>
                <option value="payroll">Payroll</option>
                <option value="accounting">Accounting</option>
                <option value="statutory">Statutory</option>
              </select>
              <label htmlFor="message" className="font-medium mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                className=" py-2 px-4 w-full rounded-lg border-black border outline-none focus:outline-none  mb-4 resize-none"
              ></textarea>
              <button className="py-2 w-full rounded-lg text-white font-medium text-xl bg-lime-custom/80 hover:bg-lime-custom">
                Request a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
