import Image from "next/image";
import Navbar from "../Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Hero() {
  return (
    <div className="bg-banner">
      <Navbar />
      <div className="container py-16 px-20 mx-auto">
        <div className="flex justify-between items-center">
          <div className="basis-1/2">
            <p className="text-[#8BBC4F] font-bold">
              #1 BEST ACCOUNTING SERVICES PROVIDER # SAIPA 57771
            </p>
            <h1 className="my-8 font-bold text-5xl">
              Rooted Professional Accounting Services
            </h1>
            <p className="text-lg mb-8">
              We provide accounting services that helps manage <br /> finances
              in your business
            </p>
            <div className="flex gap-6">
              <button className="border-black border px-8 py-3 font-bold rounded-md rounded-br-2xl">
                Pricing Plans
              </button>
              <button className="text-white bg-lime-custom/90 hover:bg-lime-custom px-8 py-3 font-bold rounded-md rounded-br-2xl">
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
