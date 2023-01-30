import React from "react";
import Hero from "../components/Hero";
import OurServiceSection from "../components/OurServiceSection";
import ProjectsGallary from "../components/ProjectsGallary";
import WhoWeAreSection from "../components/WhoWeAreSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsGallary />
      <OurServiceSection />
      <WhoWeAreSection />
    </>
  );
};

export default HomePage;
