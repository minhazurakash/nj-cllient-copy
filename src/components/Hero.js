import axios from "axios";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useQuery } from "@tanstack/react-query";
import { EffectFade, Navigation, Pagination } from "swiper";

const Hero = () => {
  // Queries
  const getSliders = async () => {
    const { data } = await axios.get("https://bored-yoke-bee.cyclic.app/api/v1/slider");
    return data;
  };
  const { data: sliders } = useQuery({
    queryKey: ["sliders"],
    queryFn: getSliders,
  });
  return (
    
    <div id="heroSection" className="p-10">
       <video autoPlay loop muted>
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <div className="content-hero">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="">
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              height={250}
              slidesPerGroup={1}
              effect={"fade"}
              loop={true}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {sliders?.data ? (
                sliders?.data?.map((slider) => {
                  return (
                    <div key={slider._id} className="h-[300px] overflow-hidden">
                      <SwiperSlide>
                        <img
                          className="w-full h-full object-cover rounded"
                          src={slider?.img}
                          alt=""
                        />
                      </SwiperSlide>
                    </div>
                  );
                })
              ) : (
                <h1>No slider found</h1>
              )}
            </Swiper>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl mb-8">
            Attract new customer, and Increase Your Chances of Success
          </h1>
          <p>
            Delightful remarkably mr on announcing themselves entreaties
            favourable. About to in so terms voice at. Equal an would is found
            seems of. The particular friendship one sufficient terminated
            frequently themselves...
          </p>
          <div className="mt-8 text-center">
            <button className="px-10 py-2 bg-[#fff] hover:bg-[#000] hover:text-[#fff] rounded">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
