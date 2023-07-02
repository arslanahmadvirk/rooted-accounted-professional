import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };
  console.log(isMobileNavOpen);
  return (
    <nav className="py-4 text-custom-black">
      <div className="container flex items-center justify-between mx-auto lg:gap-0 gap-8 lg:px-10 px-5">
        <div className="flex justify-between items-center lg:basis-5/12 basis-6/12">
          <Image
            src={"/images/logo-green.svg"}
            height={88}
            width={80}
            alt="Company Logo"
            className="w-14 h-14"
          />
          <div className="md:flex gap-12 font-medium hidden ">
            <Link href={"/"}>Home</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </div>
        </div>
        <div className="md:flex justify-between items-center lg:basis-5/12 basis-6/12 hidden">
          <div>
            <FaPhoneAlt className="w-4 h-4 fill-lime-custom inline mr-3" />
            <span>
              {"  Let's Talk:"} <b> +076 0933 475</b>
            </span>
          </div>
          <div>
            <Link
              href={"/contact"}
              className="font-semibold text-white px-6 py-2 rounded-md bg-lime-custom/80 hover:bg-lime-custom shadow"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="block md:hidden z-20">
          <button onClick={isMobileNavOpen ? closeMobileNav : openMobileNav}>
            {isMobileNavOpen ? (
              <FaXmark className="w-8 h-8 fill-white" />
            ) : (
              <CgMenuLeft className="w-8 h-8" />
            )}
          </button>
        </div>
        {isMobileNavOpen ? (
          <div className="w-screen h-screen bg-lime-custom absolute z-10 top-0 left-0 p-20">
            <div className="flex flex-col justify-center gap-8">
              <Link
                href={"/"}
                onClick={closeMobileNav}
                className="font-bold text-white text-2xl block text-center"
              >
                Home
              </Link>
              <Link
                href={"/"}
                onClick={closeMobileNav}
                className="font-bold text-white text-2xl block text-center"
              >
                Services
              </Link>
              <Link
                href={"/pricing"}
                onClick={closeMobileNav}
                className="font-bold text-white text-2xl block text-center"
              >
                Pricing
              </Link>
              <Link
                href={"/contact"}
                onClick={closeMobileNav}
                className="font-bold text-white text-2xl block text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
