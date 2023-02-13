import React from "react";
import Hero from "../components/Hero";
import OurServiceSection from "../components/OurServiceSection";
import ProjectsGallary from "../components/ProjectsGallary";
import WhoWeAreSection from "../components/WhoWeAreSection";
import PackagePage from "./PackagePage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsGallary />
      <PackagePage/>
      <WhoWeAreSection />
      <OurServiceSection />
      
      
    </>
  );
};

export default HomePage;
