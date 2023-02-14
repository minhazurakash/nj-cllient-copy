import React from "react";
import OurServiceSection from "../components/OurServiceSection";
import WhoWeAreSection from "../components/WhoWeAreSection";

const AboutPage = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <PackagePage/> */}
      {/* <ProjectsGallary /> */}
      <div className="px-8">
      <WhoWeAreSection />
      <OurServiceSection />
      
      </div>
    </>
  );
};

export default AboutPage;
