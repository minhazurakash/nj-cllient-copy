import React from "react";
import { useService } from "../Hooks/useService";

const ServiceSection = () => {
  const [Service, isLoading, refetch] = useService();

  return (
    <div className="bg-[#fff]">
    <div className="container mx-auto px-2 ">
      <div className="px-3 md:lg:xl:px-[120px]    border-t border-b py-10 bg-opacity-10">
        <h1 class="block font-sans text-4xl pb-5 font-semibold font-title leading-relaxed tracking-normal text-inherit text-center antialiased">
          These are some of the skills I will put to work for you
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3 bg-white shadow-xl shadow-neutral-100 border gap-5 ">
          {Service?.data?.map((item) => {
            return (

              <div className="card text-center flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              
              <div className="prod-img">
                <img src={item?.img} className="h-[120px] mx-auto"/>
              </div>

              <div className="prod-title mt-5">
                <p className="text-md  uppercase text-[#ae9d78] font-bold">{item?.title}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div></div>
    </div>
  );
};

export default ServiceSection;
