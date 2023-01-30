import React from "react";
import serviceImage from "../assets/images/service-illus.jpg";

const OurServiceSection = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 my-20">
      <div className="grid grid-cols-7 items-center gap-10 lg:gap-20">
        <div className="md:order-2 col-span-7 md:col-span-3">
          <img
            className="w-full h-full object-cover"
            src={serviceImage}
            alt=""
          />
        </div>
        <div className="md:order-1 col-span-7 md:col-span-4">
          <h2 className="text-xl mb-3">I BELIEVE IN…</h2>
          <h1 className=" text-3xl lg:text-4xl mb-8">
            in making your business beautiful, because it matters.
          </h1>
          <p className=" leading-8 lg:leading-10 mb-5">
            I believe that a professional online presence is the key to any
            successful business. You have 2.7 seconds to grab someones attention
            when they land on your website for the first time! You want them to
            know instantly that you and your business can be trusted. This is
            where we come in. We create beautiful website templates that you can
            purchase, install, customize, and launch in under 24 hours!
          </p>
          <button className="px-10 py-2 uppercase bg-[#FFF79E] hover:bg-[#EDCF55]">
            SEE our service
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
