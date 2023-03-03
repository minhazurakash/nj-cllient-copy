import React from "react";
import BlogSection from "../components/BlogSection";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import OurServiceSection from "../components/OurServiceSection";
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
      <OurServiceSection />
      <BlogSection/>
      
    </>
  );
};

export default HomePage;
