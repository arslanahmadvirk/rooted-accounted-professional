import { Index } from "./index";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { IoMdStar } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white py-20">
        <h4 className="text-center font-medium text-lg mb-2">WHAT WE DO</h4>
        <h1 className="text-center font-bold text-3xl">
          OUR EXPERTISE & SERVICES
        </h1>
        <div className="grid container lg:grid-rows-1 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:px-20 px-10 mx-auto mt-12">
          <Link href={"/taxation"} className="block w-full h-full">
            <ServiceCard image={"taxation"} title="taxation" />
          </Link>
          <Link href={"/payroll"} className="block w-full h-full">
            <ServiceCard image={"payroll"} title="payroll" />
          </Link>
          <Link href={"/accounting"} className="block w-full h-full">
            <ServiceCard image={"accounting"} title="accounting" />
          </Link>
          <Link href={"/statutory"} className="block w-full h-full">
            <ServiceCard image={"statutory"} title="statutory" />
          </Link>
        </div>
      </div>
      <div className=" py-20 bg-[#6EAB23D9]">
        <h1 className="text-center font-bold text-3xl">
          WHY ROOTED ACCOUNTANTS ?{" "}
        </h1>
        <div className="max-w-6xl mx-auto grid  md:grid-cols-2 grid-cols-1 lg:px-20 px-10 mt-12 gap-8">
          <p className="text-justify">
            We are a reputable and duly registered accounting agency affiliated
            with SAIPA, demonstrating a profound dedication to our profession.
            Over the course of our extensive experience in assisting companies
            with their statutory, accounting, and taxation requirements, we have
            become acutely aware of the challenges faced by small businesses. in
            maintaining compliance while simultaneously contending with the
            financial burden associated with engaging professional accounting
            services.
          </p>
          <div className="text-justify">
            Our primary objective is to facilitate the growth of small
            businesses while ensuring that their financial resources are not
            unduly burdened. We are committed to assisting each of our clients
            in achieving their growth aspirations, providing them with the
            confidence that we share a mutual investment in their success. At
            Rooted Accountants, we offer unwavering support to meet your diverse
            needs.
          </div>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-center font-bold text-3xl mb-20">TESTIMONIALS</h1>
        <div className="py-20 bg-gradient-to-b from-[#8BBC4FA6] to-[#8BBC4F4D]">
          <h1 className="text-center font-bold text-3xl mb-12">
            What People Say About us
          </h1>
          <Splide
            hasTrack={false}
            options={{ width: "800px", pagination: false }}
            className="mx-auto"
          >
            <SplideTrack>
              <SplideSlide>
                <div className="rounded-lg md:bg-white p-8 flex md:flex-row flex-col gap-8 shadow-md max-w-2xl mx-auto">
                  <div className=" md:basis-2/5 basis-full">
                    <div className="relative">
                      <Image
                        src={"/images/quote-sign.svg"}
                        width={56}
                        height={51}
                        alt="quote sign"
                        className="absolute -top-5"
                      />
                      <Image
                        src={"/images/testimonials-1.jpg"}
                        width={1920}
                        height={1080}
                        alt="User Photo"
                        className="w-40 h-40 rounded-full object-fit mx-auto"
                      />
                    </div>
                    <div className="text-center mt-5 md:hidden">
                      <h3 className="font-bold text-2xl">Freddy Dean</h3>
                      <h6>Co-Founder Best Accounting</h6>
                    </div>
                  </div>
                  <div>
                    <div className="flex md:justify-start justify-center items-center gap-1">
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-400 md:w-4 md:h-4 h-6 w-6 inline" />
                      <span className="font-semibold ml-4 md:inline hidden">
                        4.0 Rating
                      </span>
                    </div>
                    <h4 className="text-xl font-bold md:text-left text-center">
                      Aturduit can manage finance our business
                    </h4>
                    <p className="mb-4 md:text-left text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce nisi nunc, mattis non rutrum et.
                    </p>
                    <h6 className="hidden md:block">
                      <b>Freddy Dean</b>{" "}
                      <span className="text-sm ml-2">
                        Co-Founder Best Accounting
                      </span>
                    </h6>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="rounded-lg md:bg-white p-8 flex md:flex-row flex-col gap-8 shadow-md max-w-2xl mx-auto">
                  <div className=" md:basis-2/5 basis-full">
                    <div className="relative">
                      <Image
                        src={"/images/quote-sign.svg"}
                        width={56}
                        height={51}
                        alt="quote sign"
                        className="absolute -top-5"
                      />
                      <Image
                        src={"/images/testimonials-1.jpg"}
                        width={1920}
                        height={1080}
                        alt="User Photo"
                        className="w-40 h-40 rounded-full object-fit mx-auto"
                      />
                    </div>
                    <div className="text-center mt-5 md:hidden">
                      <h3 className="font-bold text-2xl">Freddy Dean</h3>
                      <h6>Co-Founder Best Accounting</h6>
                    </div>
                  </div>
                  <div>
                    <div className="flex md:justify-start justify-center items-center gap-1">
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-500 md:w-4 md:h-4 h-6 w-6 inline" />
                      <IoMdStar className="fill-amber-400 md:w-4 md:h-4 h-6 w-6 inline" />
                      <span className="font-semibold ml-4 md:inline hidden">
                        4.0 Rating
                      </span>
                    </div>
                    <h4 className="text-xl font-bold md:text-left text-center">
                      Aturduit can manage finance our business
                    </h4>
                    <p className="mb-4 md:text-left text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce nisi nunc, mattis non rutrum et.
                    </p>
                    <h6 className="hidden md:block">
                      <b>Freddy Dean</b>{" "}
                      <span className="text-sm ml-2">
                        Co-Founder Best Accounting
                      </span>
                    </h6>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <HiChevronRight className="!fill-[#6EAB23]" />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <HiChevronRight className="!fill-[#6EAB23]" />
              </button>
            </div>
          </Splide>
        </div>
      </div>
      <div className="container mx-auto my-20">
        <div className="relative max-w-6xl mx-auto bg-[#A1D264FA] rounded-lg px-12 lg:h-80 h-96 flex flex-col-reverse justify-around">
          <div className="lg:py-20 lg:text-left text-center font-medium">
            <h1 className="font-extrabold text-4xl capitalize mb-2 hidden lg:block">
              Ready to give it a try ?
            </h1>
            <h6 className="text-lg mb-6">
              We are here to help you. Feel free to contact us.
            </h6>
            <button className="px-6 py-2 bg-black text-white font-medium rounded-md shadow-md shadow-black/50">
              Contact
            </button>
          </div>
          <div>
            <Image
              src={"/images/Hero.png"}
              width={457}
              height={469}
              alt="Girl Image"
              className=" lg:w-96 w-48 lg:absolute static mx-auto lg:right-20 lg:-top-[68px]"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
