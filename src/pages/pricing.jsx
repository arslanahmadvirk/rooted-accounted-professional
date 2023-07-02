import Navbar from "@/components/Navbar";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Footer from "@/components/Footer";
import Image from "next/image";
export default function Pricing() {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
        <div className="py-20 bg-service relative h-96">
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 ">
            <div className="max-w-6xl mx-auto mt-32 text-white">
              <h1 className=" font-black text-3xl mb-5">
                OUR FLEXIBLE PRICING PLANS FOR YOU{" "}
              </h1>
              <p className="font-medium mb-5 capitalize">
                Transparent Pricing Options to Suit Your Budget
              </p>
              <Link href={"/"}>HOME</Link>
              <HiChevronRight className="mx-5 fill-white inline" />
              <Link href={"/services"}>PRICING</Link>
            </div>
          </div>
        </div>
        <div className=" py-20 container mx-auto">
          <h1 className="text-center font-bold text-3xl mb-12">
            PACKAGES & PRICING
          </h1>
          <div className="grid grid-cols-3 grid-rows-1 max-w-5xl mx-auto gap-4">
            <div className="rounded-xl shadow-lg py-5">
              <div className="bg-[#8BBC4F] rounded-t-xl py-6">
                <h1 className="font-extrabold text-2xl text-center ">
                  Non - VAT Business
                </h1>
                <br />
                <h1 className="font-extrabold text-3xl text-center">
                  <sup className="font-medium">R</sup>
                  4500
                </h1>
              </div>
              <div className="my-10 px-10 border-b border-dashed border-gray-500">
                <ul className="text-center flex flex-col gap-4">
                  <li className="my-4">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F] inline mr-5" />
                    <span className="font-medium text-center">
                      Bookkeeping Service
                    </span>
                  </li>
                  <li className="my-4">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F] inline mr-5" />
                    <span className="font-medium text-center">
                      Statutory Service
                    </span>
                  </li>
                  <li className="my-4">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F] inline mr-5" />
                    <span className="font-medium text-center">
                      Payroll upto 5 Employees
                    </span>
                  </li>
                  <li className="my-4">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F] inline mr-5" />
                    <span className="font-medium text-center">
                      Taxation services companies upto R1 m turnover.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-center flex flex-col gap-4">
                  <li className="my-4">
                    <HiXMark className="w-6 h-6 fill-[#F80707] inline mr-5" />
                    <span className="font-medium text-center">
                      Accounting software fee of the companies choice
                    </span>
                  </li>
                  <li className="my-4">
                    <HiXMark className="w-6 h-6 fill-[#F80707] inline mr-5" />
                    <span className="font-medium text-center">
                      Director’s personal taxes
                    </span>
                  </li>
                </ul>
              </div>
              <button className="w-4/5 mx-auto py-2 block bg-lime-custom/80 rounded-lg text-white font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mb-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-[#8BBC4FA6] to-[#8BBC4F4D] rounded-2xl py-8 px-20 max-w-6xl mx-auto ">
            <div className="mb-8">
              <MdOutlineCalendarMonth className="h-14 w-14 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4 text-center">
                Not sure which plan suits your business?
              </h1>
              <p className="text-center max-w-2xl mx-auto font-medium ">
                Contact us to discuss your individual needs in order to create a
                customized <br /> plan for your business and schedule a Free
                Call.
              </p>
            </div>
            <div className="flex gap-4 max-w-sm mx-auto">
              <div>
                <Image
                  src={"/images/user.png"}
                  height={161}
                  width={171}
                  alt="User"
                  className="rounded-full object-cover"
                />
              </div>
              <h1 className="font-bold text-xl">Lorem Ipsum</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
