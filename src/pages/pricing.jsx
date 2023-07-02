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
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 px-5 ">
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
          <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 mx-5 max-w-5xl md:mx-auto gap-4">
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
              <div className="h-64 border-b border-dashed border-gray-500">
                <ul className="text-center flex flex-col gap-6 my-4">
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Bookkeeping Service
                    </h6>
                  </li>
                  <li className="flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Statutory Service
                    </h6>
                  </li>
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Payroll upto 5 employees
                    </h6>
                  </li>
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Taxation services companies upto R1 m turnover.
                    </h6>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-center flex flex-col gap-6 my-4 h-24">
                  <li className=" flex w-64 mx-auto">
                    <HiXMark className="w-6 h-6 fill-[#F80707]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Accounting software fee of the companies choice
                    </h6>
                  </li>
                  <li className=" flex w-64 mx-auto">
                    <HiXMark className="w-6 h-6 fill-[#F80707]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Director’s personal taxes
                    </h6>
                  </li>
                </ul>
              </div>
              <button className="mt-12 w-4/5 mx-auto py-2 block bg-lime-custom/80 hover:bg-lime-custom rounded-lg text-white font-medium">
                Get Started
              </button>
            </div>
            <div className="rounded-xl shadow-lg py-5">
              <div className="bg-[#8BBC4F] rounded-t-xl py-6">
                <h1 className="font-extrabold text-2xl text-center ">
                  VAT Business
                </h1>
                <br />
                <h1 className="font-extrabold text-3xl text-center">
                  <sup className="font-medium">R</sup>
                  4500
                </h1>
              </div>
              <div className="h-64 border-b border-dashed border-gray-500">
                <ul className="text-center flex flex-col gap-6 my-4">
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Bookkeeping Service
                    </h6>
                  </li>
                  <li className="flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Statutory Service
                    </h6>
                  </li>
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Payroll upto 5 employees
                    </h6>
                  </li>
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Taxation services applicable to companies.
                    </h6>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-center flex flex-col gap-6 my-4 h-24">
                  <li className=" flex w-64 mx-auto">
                    <HiXMark className="w-6 h-6 fill-[#F80707]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Accounting software fee of the companies choice
                    </h6>
                  </li>
                  <li className=" flex w-64 mx-auto">
                    <HiXMark className="w-6 h-6 fill-[#F80707]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Director’s personal taxes
                    </h6>
                  </li>
                </ul>
              </div>
              <button className="mt-12 w-4/5 mx-auto py-2 block bg-lime-custom/80 hover:bg-lime-custom rounded-lg text-white font-medium">
                Get Started
              </button>
            </div>
            <div className="rounded-xl shadow-lg py-5">
              <div className="bg-[#8BBC4F] rounded-t-xl py-6">
                <h1 className="font-extrabold text-2xl text-center ">
                  Additional Services
                </h1>
                <br />
                <h1 className="font-extrabold text-3xl text-center">
                  <sup className="font-medium">R</sup>
                  4500
                </h1>
              </div>
              <div className="h-64 border-b border-dashed border-gray-500">
                <ul className="text-center flex flex-col gap-6 my-4">
                  <li className=" flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Once off of any of the services we offer
                    </h6>
                  </li>
                  <li className="flex w-64 mx-auto">
                    <AiOutlineCheck className="w-6 h-6 fill-[#8BBC4F]" />
                    <h6 className="font-medium text-center w-full mx-auto">
                      Personal income tax calculation & submission.
                    </h6>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-center flex flex-col gap-6 my-4 h-24">
                  <li className=" flex w-64 mx-auto">
                    <h6 className="font-medium text-center w-full mx-auto">
                      Please enquire about the specific information we offer.
                    </h6>
                  </li>
                </ul>
              </div>
              <button className="mt-12 w-4/5 mx-auto py-2 block bg-lime-custom/80 hover:bg-lime-custom rounded-lg text-white font-medium">
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
      {/* <Footer /> */}
    </div>
  );
}
