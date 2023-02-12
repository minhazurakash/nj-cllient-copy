import React from "react";


const ServiceSection = () => {
  
  return (
    
    <div className="container mx-auto px-2">
    
      <div className="px-3 md:lg:xl:px-40   border-t border-b py-10 bg-opacity-10" >
      <h1 class="block font-sans text-4xl pb-5 font-semibold leading-relaxed tracking-normal text-inherit text-center antialiased">
      These are some of the skills I will put to work for you
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-4 group bg-white shadow-xl shadow-neutral-100 border ">

          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5"><img src="web.svg" className="servimg" alt="" /></span>
            <p className="text-lg font-medium text-slate-700 mt-3">Website Development, Creation, and Management</p>
            <p className="mt-2 text-sm text-slate-500">Website development involves designing, creating, and managing an online platform for businesses and organizations to enhance their online presence.</p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5"><img src="seo.svg" className="servimg" alt="" /></span>
            <p className="text-lg font-medium text-slate-700 mt-3">SEO - Search Engine Optimization Specialist</p>
            <p className="mt-2 text-sm text-slate-500">SEO Specialist optimizes websites to increase organic search engine rankings and drive traffic, using techniques such as keyword research, content creation, and link building.</p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5"><img src="social.svg" className="servimg" alt="" /></span>
            <p className="text-lg font-medium text-slate-700 mt-3">Social Media Management</p>
            <p className="mt-2 text-sm text-slate-500">Social media management involves creating and curating engaging content, managing online presence, and analyzing results to increase brand visibility and engagement.</p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5"><img src="online.svg" className="servimg" alt="" /></span>
            <p className="text-lg font-medium text-slate-700 mt-3">Online Reputation Management</p>
            <p className="mt-2 text-sm text-slate-500">Online Reputation Management is the process of monitoring and influencing an individual or brand's reputation on the internet.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;
