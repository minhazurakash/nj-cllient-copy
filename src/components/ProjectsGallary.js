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

const ProjectsGallary = () => {
  // Queries
  const getProjects = async () => {
    const { data } = await axios.get("https://bored-yoke-bee.cyclic.app/api/v1/Project");
    return data;
  };
  const { data: Projects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  return (
    <>
      <div id="projectSection" className="Projects_gallary bg-[#f3e8e4] py-10 lg:xl:px-10">
        <div className="text-center mb-14">
          <h1 className="text-3xl uppercase">Our Latest Projects</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          height={250}
          slidesPerGroup={1}
          effect={"slide"}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 2.6,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {Projects?.data ? (
            Projects?.data?.map((project) => {
              return (
                <div key={project._id} className="h-[300px] overflow-hidden">
                  <SwiperSlide>
                    <img
                      className="w-full h-full object-cover rounded"
                      src={project?.img}
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
    </>
  );
};

export default ProjectsGallary;
