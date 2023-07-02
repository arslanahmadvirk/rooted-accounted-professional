import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Services() {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
        <div className="py-20 bg-service relative h-96">
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 ">
            <div className="max-w-6xl mx-auto mt-32 lg:px-0 px-5 text-white">
              <h1 className=" font-black text-3xl mb-5 ">OUR SERVICES </h1>
              <p className="font-medium mb-5 ">
                Comprehensive Accounting Solutions to Streamline Your Finances
              </p>
              <Link href={"/"}>HOME</Link>
              <HiChevronRight className="mx-5 fill-white inline" />
              <Link href={"/services"}>SERVICES</Link>
            </div>
          </div>
        </div>
        <div className="py-20 mx-auto max-w-5xl">
          <div className="grid md:grid-rows-4 md:grid-cols-2 gap-10 px-5">
            <div className="mb-8 md:order-1 order-1">
              <Image
                src={"/images/service-1.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 1"
              />
            </div>
            <div className="mb-8 md:order-2 order-2 md:text-left text-center">
              <h1 className="font-bold text-3xl mb-4">TAXATION</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Payroll Taxes</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>VAT</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Company Income Tax</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Tax Clearance Certificates</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Tax Directives</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Support with all SARS issues and queries</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8 md:order-3 order-4 md:text-left text-center">
              <h1 className="font-bold text-3xl mb-4">PAYROLL</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Payslips (Weekly, Bi-weekly, monthly) </span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>VAT</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Human Resource Management</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Employee Taxes</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Tax clearance certificates</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium  rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8 md:order-4 order-3 `">
              <Image
                src={"/images/service-4.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 2"
              />
            </div>
            <div className="mb-8 md:order-5 order-5">
              <Image
                src={"/images/service-2.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 3"
              />
            </div>
            <div className="mb-8 md:order-6 order-6 md:text-left text-center">
              <h1 className="font-bold text-3xl mb-4">ACCOUNTING</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Monthly bookkeeping services</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Management reporting</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Management reporting</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium  rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8 md:order-7 order-8 md:text-left text-center">
              <h1 className="font-bold text-3xl mb-4">STATUTORY</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>
                    Registration, Deregistration and Amendments for companies
                  </span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Monthly bookkeeping services</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black md:inline-block hidden" />
                  <span>Annual Financial Statements</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8 md:order-8 order-7">
              <Image
                src={"/images/service-3.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 4"
              />
            </div>
          </div>
        </div>
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="flex justify-between items-center md:flex-row flex-col-reverse bg-gradient-to-b from-[#8BBC4FA6] to-[#8BBC4F4D] rounded-2xl py-8 md:px-20 px-10 max-w-6xl mx-auto ">
            <div>
              <h1 className="md:text-3xl text-2xl font-bold mb-8 md:text-left text-center">
                Check Our Pricing Plans
              </h1>
              <button className="text-white bg-black px-8 py-3 font-bold rounded-md rounded-br-2xl block mx-auto md:mx-0">
                Pricing Plans
              </button>
            </div>
            <div className="mb-6">
              <Image
                src={"/images/pricing-banner.png"}
                height={202}
                width={250}
                alt="Image"
              />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
