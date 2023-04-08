import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router-dom";
import { useContentData } from "../Hooks/useContentData";

const Hero = () => {

  const { contentData, isLoading } = useContentData();

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="">
    <div id="heroSection" className="px-10  xl:lg:py-[180px]">
       <video autoPlay loop muted>
        <source src="hero.mp4" type="video/mp4" className="object-fit" />
      </video>
      <div className="content-hero ">
      <div className="container mx-2 mx-auto lg:xl:px-[240px] items-center gap-10">
       
        <div className="text-center ">
          <h1 className="lg:xl:text-5xl text-md lg:xl:mb-2 pt-4 md:xl:lg:pt-0 text-xl text-[#000]">
            {contentData.sliderTitle}
           
          </h1>
          <h1 className="lg:xl:text-5xl text-md lg:xl:mb-8 lg:xl:pb-8  text-xl text-[#000]">
            {contentData.sliderTitle2}
           
          </h1>
          <p className="text-[#000]  md:lg:xl:text-3xl text-md lg:xl:block font-subtitle">
          {contentData.sliderSubTitle}
          <br />
          {contentData.sliderSubTitle2}
          </p>
          <div className="mt-2 lg:xl:mt-8 py-2 lg:xl:py-0 text-center">
          <Link to="/contact">
            <button className=" p-2 lg:xl:p-4 bg-[#000] text-[#fff] hover:bg-[#17255A] text-sm  lg:xl:text-xl hover:text-[#fff]">
            Contact Us 
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
