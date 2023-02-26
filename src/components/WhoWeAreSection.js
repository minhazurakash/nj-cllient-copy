import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className="bg-[#fcf9f4]">
      
 <div className="container mx-auto lg:xl:px-[120px]  mb-20" >
 <h1 className="text-4xl lg:text-5xl mb-3 font-title pt-10 text-center">About Me</h1>
          <h2 className="  mb-8 text-2xl font-subtitle text-center">
          My name is Cristiane Abreu
          
          </h2>
      <div className="grid grid-cols-7 items-center gap-3 lg:gap-5">
     
          
      <div className=" col-span-7 md:col-span-4">
          
          <p className=" leading-relaxed mb-5 font-subtitle">
          I am a Web Developer and Web Marketing Analyst.
          I am passionate in regards to my dedication to deliver digital marketing plans with innovative strategies that will boost your website’s rank on search engine results pages.
          <br /><br/>
          One thing that I like about this field is seeing my clients happy with their numbers-driven results. I just re-built my website, I am very excited about it, and I can help you realize your internet presence, as well. I have been delivering quality Search Engine & Website Optimization to friends and small businesses since 2008. 
          <br /><br/>
          My skills as a WordPress developer and SEO Analyst are evident in my work and the results I bring to my clients. Along with my internet skills, I also offer strong work ethics, reliability, and high quality service. 
          <br /><br/>
          My prices are among the lowest in the area. My honesty, good reputation, and hard work speak for itself. I believe that an online presence is very important for the small business owner. Whether you sell hand-made jewelry or million-dollar real estate, you must generate traffic. You can have the best products and services available anywhere on earth, but if no one knows you are there, you will not sell anything.
          <br /><br />
          That is where I come in. There are many factors to website optimization and search engine optimization. I will help you develop a professional website that pays for itself. Grow your online presence and attract prospective customers today at an affordable price.
          </p>
          {/* <button className="lg:xl:px-[120px] py-2 bg-[#FFF79E] hover:bg-[#EDCF55]">
            SEE WHO WE ARE
          </button> */}
        </div>
        <div className=" col-span-7 md:col-span-3 h-full">
          <img
            src="about.jpg"
            alt=""
          />
        </div>
        
      </div>
    </div>
    </div>
   
  );
};

export default WhoWeAreSection;
