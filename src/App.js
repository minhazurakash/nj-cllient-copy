import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import ProjectsGallary from "./components/ProjectsGallary";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <ProjectsGallary />
    </>
  );
};

export default App;
