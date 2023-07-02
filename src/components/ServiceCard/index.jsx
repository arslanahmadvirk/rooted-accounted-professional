import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
export default function ServiceCard({ image, title }) {
  return (
    <div className="relative h-[300px] rounded-2xl bg-[#D6EFB7] hover:shadow-lg shadow-[#8BBC4F] flex flex-col justify-center items-center transition duration-300">
      <div className="p-4 rounded-full bg-[#ADDB74] inline-block mb-6">
        <Image
          src={`/images/${image}.svg`}
          alt="card image"
          width={47}
          height={47}
          className="mx-auto"
        />
      </div>
      <span className="p-2 bg-[#8BBC4FBF] absolute top-0 right-0 rounded-tr-2xl">
        <MdOutlineArrowOutward className="w-8 h-8" />
      </span>
      <h1 className="text-2xl font-bold uppercase ">{title}</h1>
    </div>
  );
}
