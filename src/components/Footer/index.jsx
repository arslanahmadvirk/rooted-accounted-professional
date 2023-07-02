import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer({}) {
  return (
    <div className="container mx-auto">
      <div className="max-w-6xl py-20 border-y-2 border-dashed border-gray-500 mx-auto px-5 lg:px-0">
        <div className="flex w-full justify-between flex-wrap">
          <div className="mb-8 lg:w-1/4 w-full">
            <Image
              src={"/images/logo-green.svg"}
              height={88}
              width={80}
              alt="Company Logo"
              className="w-20 h-20 mb-8"
            />
            <p className="font-medium hidden lg:block">
              8437 San Carlos Street <br /> CapeTown, South Africa
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-2 font-medium">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/help">Need Help</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 w-1/2">
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="flex flex-col gap-2 font-medium">
              <li>
                <Link href="/home">For Accountants</Link>
              </li>
              <li>
                <Link href="/services">For Bookkeeper</Link>
              </li>
              <li>
                <Link href="/help">For Payroll</Link>
              </li>
              <li>
                <Link href="/help">For Statutory</Link>
              </li>
            </ul>
          </div>
          <div className="lg:text-left text-center lg:w-1/4 w-full lg:mt-0 mt-10">
            <h4 className="font-bold text-lg mb-6">Customer Support</h4>
            <ul className="flex flex-col gap-2 font-medium">
              <li>
                <b>Email:</b>
                <Link href={"mailto:info@rootedaccountants.co.za"}>
                  info@rootedaccountants.co.za
                </Link>
              </li>
              <li>
                <b>Phone:</b>
                <Link href="tel:+0760933475"> +076 0933 475</Link>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Link href={"/"}>
                  <FaFacebook className="w-8 h-8 fill-lime-custom" />
                </Link>
                <Link href={"/"}>
                  <RiWhatsappFill className="w-8 h-8 fill-lime-custom" />
                </Link>
                <Link href={"/"}>
                  <AiFillInstagram className="w-8 h-8 fill-lime-custom" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-center text-lg font-bold">
          © 2023 RootedAccountingProfessionals – All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
