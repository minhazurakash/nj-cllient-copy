import React from "react";
import { useContentData } from "../Hooks/useContentData";

const WhoWeAreSection = () => {
  const { contentData, isLoading } = useContentData();
  return (
    <div className="bg-[#fff]">
      
 <div className="container mx-auto px-5 lg:xl:px-[120px]  mb-20" >
 <h1 className="text-4xl lg:text-5xl pb-4 font-title pt-10 text-center">About Me</h1>
          <h2 className="  mb-8 text-2xl font-subtitle text-center">
          {contentData.aboutMeSubTitle}
          
          </h2>
      <div className="grid grid-cols-7 items-center gap-3 lg:gap-5">
      
      <div className=" col-span-7 md:col-span-3">
          
          <img src={`${contentData.aboutMeImage}`} alt="" />
        </div> 
      <div className=" col-span-7 md:col-span-4">
          
          <p className=" leading-relaxed mb-5 font-subtitle">
        
          <div dangerouslySetInnerHTML={{ __html: contentData.aboutMeContent }} />
          </p>
        </div>

        
      </div>
    </div>
    </div>
   
  );
};

export default WhoWeAreSection;
