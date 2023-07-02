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
            <div className="max-w-6xl mx-auto mt-32 text-white">
              <h1 className=" font-black text-3xl mb-5">OUR SERVICES </h1>
              <p className="font-medium mb-5">
                Comprehensive Accounting Solutions to Streamline Your Finances
              </p>
              <Link href={"/"}>HOME</Link>
              <HiChevronRight className="mx-5 fill-white inline" />
              <Link href={"/services"}>SERVICES</Link>
            </div>
          </div>
        </div>
        <div className="py-20 mx-auto max-w-5xl">
          <div className="grid grid-rows-4 grid-cols-2 gap-10">
            <div className="mb-8">
              <Image
                src={"/images/service-1.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 1"
              />
            </div>
            <div className="mb-8 ml-10">
              <h1 className="font-bold text-3xl mb-4">TAXATION</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Payroll Taxes</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>VAT</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Company Income Tax</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Tax Clearance Certificates</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Tax Directives</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Support with all SARS issues and queries</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8">
              <h1 className="font-bold text-3xl mb-4">PAYROLL</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Payslips (Weekly, Bi-weekly, monthly) </span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>VAT</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Human Resource Management</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Employee Taxes</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Tax clearance certificates</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium  rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8">
              <Image
                src={"/images/service-4.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 2"
              />
            </div>
            <div className="mb-8">
              <Image
                src={"/images/service-2.png"}
                className="rounded-lg"
                height={334}
                width={500}
                alt="Service 3"
              />
            </div>
            <div className="mb-8 ml-10">
              <h1 className="font-bold text-3xl mb-4">ACCOUNTING</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Monthly bookkeeping services</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Management reporting</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Management reporting</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium  rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8 ">
              <h1 className="font-bold text-3xl mb-4">STATUTORY</h1>
              <ul className="mb-4 -ml-3">
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>
                    Registration, Deregistration and Amendments for companies
                  </span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Monthly bookkeeping services</span>
                </li>
                <li>
                  <BsDot className="w-10 h-10 fill-black inline-block" />
                  <span>Annual Financial Statements</span>
                </li>
              </ul>
              <button className="bg-lime-custom/80 hover:bg-lime-custom py-2 px-5 text-white font-medium rounded-bl-md rounded-tr-md">
                Get a Quote
              </button>
            </div>
            <div className="mb-8">
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
          <div className="flex justify-between items-center bg-gradient-to-b from-[#8BBC4FA6] to-[#8BBC4F4D] rounded-2xl py-8 px-20 max-w-6xl mx-auto ">
            <div>
              <h1 className="text-3xl font-extrabold mb-8">
                Check Our Pricing Plans
              </h1>
              <button className="text-white bg-black px-8 py-3 font-bold rounded-md rounded-br-2xl">
                Pricing Plans
              </button>
            </div>
            <div>
              <Image
                src={"/images/pricing-banner.png"}
                height={202}
                width={250}
                alt="Image"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
