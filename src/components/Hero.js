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
    <div className="px-8">
    <div id="heroSection" className="px-10 xl:lg:py-[180px]">
       <video autoPlay loop muted>
        <source src="hero.mp4" type="video/mp4" className="hidden xl:lg:block" />
      </video>
      <div className="content-hero">
      <div className="container mx-2  lg:xl:px-[240px] items-center gap-10">
       
        <div className="text-center">
          <h1 className="text-5xl mb-8 text-[#6f5e38]">
            {contentData.heroTitle}
          </h1>
          <p className="text-[#6f5e38] text-3xl font-subtitle">
          {contentData.heroSubTitle}
          </p>
          <div className="mt-8 text-center">
          <Link to="/contact">
            <button className=" p-4 bg-[#fff] hover:bg-[#000] text-xl hover:text-[#fff]">
            Contact us 
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
