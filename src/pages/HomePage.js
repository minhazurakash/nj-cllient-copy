import React from "react";
import BlogSection from "../components/BlogSection";
import Hero from "../components/Hero";
import PackageSection from "../components/PackageSection";
import ProjectsGallery from "../components/ProjectsGallary";
import ServiceSection from "../components/ServiceSection";
import WhoWeAreSection from "../components/WhoWeAreSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PackageSection/>
      <ServiceSection/>
      <ProjectsGallery/>

      <WhoWeAreSection />

      <BlogSection/>

      
      
    </>
  );
};

export default HomePage;
