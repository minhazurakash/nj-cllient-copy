import React from "react";
import Navigation from "./shared/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./shared/Footer";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
