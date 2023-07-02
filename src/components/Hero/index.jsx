import Image from "next/image";
import Navbar from "../Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Hero() {
  return (
    <div className="bg-banner">
      <Navbar />
      <div className="container py-16 lg:px-20 px-5 mx-auto">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
          <div className="basis-1/2 lg:text-left text-center">
            <p className="text-[#8BBC4F] font-bold">
              #1 BEST ACCOUNTING SERVICES PROVIDER # SAIPA 57771
            </p>
            <h1 className="my-8 font-bold lg:text-5xl text-4xl">
              Rooted Professional Accounting Services
            </h1>
            <p className="text-lg mb-8 hidden lg:block">
              We provide accounting services that helps manage <br /> finances
              in your business
            </p>
            <div className="flex gap-6 lg:justify-start justify-center">
              <button className="border-black border lg:px-8 px-4 py-3 font-bold rounded-md rounded-br-2xl">
                Pricing Plans
              </button>
              <button className="text-white bg-lime-custom/90 hover:bg-lime-custom  lg:px-8 px-4  py-3 font-bold rounded-md rounded-br-2xl">
                {"Let's Get Started"}
                <FaArrowRightLong className="inline ml-2" />
              </button>
            </div>
          </div>
          <div className="basis-1/2">
            <Image
              src={"/images/hero-img__home.png"}
              height={555}
              width={587}
              className=""
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
