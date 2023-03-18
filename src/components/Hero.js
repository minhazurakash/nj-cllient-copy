import axios from "axios";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Hero = () => {
  // Queries
  const getSliders = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/slider");
    return data;
  };
  const { data: sliders } = useQuery({
    queryKey: ["sliders"],
    queryFn: getSliders,
  });
  return (
    <div className="px-8">
    <div id="heroSection" className="p-10">
       <video autoPlay loop muted>
        <source src="hero.mp4" type="video/mp4" className="hidden xl:lg:block" />
      </video>
      <div className="content-hero">
      <div className="container mx-2  lg:xl:px-[240px] items-center gap-10">
       
        <div className="text-center">
          <h1 className="text-3xl mb-8 text-[#6f5e38]">
            Attract new customer, and Increase Your Chances of Success
          </h1>
          <p className="text-[#6f5e38] text-xl font-subtitle">
            Delightful remarkably mr on announcing themselves entreaties
            favourable. About to in so terms voice at. Equal an would is found
            seems of. The particular friendship one sufficient terminated
            frequently themselves...
          </p>
          <div className="mt-8 text-center">
          <Link to="/contact">
            <button className="lg:xl:px-[120px] py-2 bg-[#fff] hover:bg-[#000] hover:text-[#fff] rounded">
            
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
