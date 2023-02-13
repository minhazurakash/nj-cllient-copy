import React from "react";
import { useService } from "../Hooks/useService";

const ServiceSection = () => {
  const [Service, isLoading, refetch] = useService();

  return (
    <div className="container mx-auto px-2">
      <div className="px-3 md:lg:xl:px-10   border-t border-b py-10 bg-opacity-10">
        <h1 class="block font-sans text-4xl pb-5 font-semibold leading-relaxed tracking-normal text-inherit text-center antialiased">
          These are some of the skills I will put to work for you
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3 bg-white shadow-xl shadow-neutral-100 border ">
          {Service?.data?.map((item) => {
            return (
              <div className="p-10 flex flex-col items-center text-center md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50">
                <span className="p-5">
                  <img src={item?.img} className="servimg" alt="" />
                </span>
                <p className="text-lg font-medium text-slate-700 my-3">
                  {item?.title}
                </p>
                <div dangerouslySetInnerHTML={{ __html: item?.content }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
