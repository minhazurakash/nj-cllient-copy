import React from "react";
import Navigation from "./shared/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./shared/Footer";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RequireAuth from "./shared/RequireAuth";
import DashboardPage from "./pages/DashboardPage";
import SliderList from "./components/DashboardComponents/SliderList";
import ProjectList from "./components/DashboardComponents/ProjectList";
import InstagramList from "./components/DashboardComponents/InstagramList";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import CreateProject from "./components/DashboardComponents/CreateProject";
import { ToastContainer } from "react-toastify";
import CreateSlider from "./components/DashboardComponents/CreateSlider";
import PackageList from "./components/DashboardComponents/PackageList";
import CreatePackage from "./components/DashboardComponents/CreatePackage";
import CreateInstagram from "./components/DashboardComponents/CreateInstagram";
import UpdateInstagram from "./components/DashboardComponents/UpdateInstagram";

const App = () => {
  const { user } = useAuthState(auth);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        >
          <Route index element={<h1>Hello User !</h1>}></Route>
          <Route path="profile" element={<h1>Hello User !</h1>}></Route>
          <Route path="create-slider" element={<CreateSlider />}></Route>
          <Route path="slider" element={<SliderList />}></Route>
          <Route path="create-project" element={<CreateProject />}></Route>
          <Route path="project" element={<ProjectList />}></Route>
          <Route path="instagram" element={<InstagramList />}></Route>
          <Route path="create-instagram" element={<CreateInstagram />}></Route>
          <Route
            path="update-instagram/:id"
            element={<UpdateInstagram />}
          ></Route>
          <Route path="package" element={<PackageList />}></Route>
          <Route path="create-package" element={<CreatePackage />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
