import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import ProjectsGallary from "./components/ProjectsGallary";
import WhoWeAreSection from "./components/WhoWeAreSection";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <ProjectsGallary />
      <WhoWeAreSection />
    </>
  );
};

export default App;
