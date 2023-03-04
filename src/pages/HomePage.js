import React from "react";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import ServiceSection from "../components/ServiceSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import PackagePage from "./PackagePage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PackagePage/>
      {/* <ProjectsGallary /> */}
      <ImageGallery/>
      <ServiceSection/>      

      <WhoWeAreSection />
      {/* <OurServiceSection /> */}
      {/* <BlogSection/> */}
      
    </>
  );
};

export default HomePage;
