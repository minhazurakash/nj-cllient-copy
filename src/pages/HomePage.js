import React from "react";
import BlogSection from "../components/BlogSection";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import PackageSection from "../components/PackageSection";
import WhoWeAreSection from "../components/WhoWeAreSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PackageSection/>
      {/* <ProjectsGallary /> */}
      <ImageGallery/>
      <BlogSection/>
      {/* <ServiceSection/>       */}

      <WhoWeAreSection />
      {/* <OurServiceSection /> */}
      
      
    </>
  );
};

export default HomePage;
