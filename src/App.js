import React, { useState } from "react";
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
import UpdateSlider from "./components/DashboardComponents/UpdateSlider";
import UpdateProject from "./components/DashboardComponents/UpdateProject";
import UpdatePackage from "./components/DashboardComponents/UpdatePackage";
import PackagePage from "./pages/PackagePage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import BlogList from "./components/DashboardComponents/BlogList";
import CreateBlog from "./components/DashboardComponents/CreateBlog";
import "react-toastify/dist/ReactToastify.css";
import UpdateBlog from "./components/DashboardComponents/updateBlog";
import OrderList from "./components/DashboardComponents/OrderList";
import MyOrder from "./components/DashboardComponents/MyOrder";
import "./App.css";
import ServiceList from "./components/DashboardComponents/ServiceList";
import CreateService from "./components/DashboardComponents/CreateService";
import UpdateService from "./components/DashboardComponents/updateService";

const App = () => {
  const { user } = useAuthState(auth);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/service" element={<ServicePage />} />
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
          <Route path="create-blog" element={<CreateBlog />}></Route>
          <Route path="slider" element={<SliderList />}></Route>
          <Route path="blog" element={<BlogList />}></Route>
          <Route path="update-slider/:id" element={<UpdateSlider />}></Route>
          <Route path="update-blog/:id" element={<UpdateBlog />}></Route>
          <Route path="create-project" element={<CreateProject />}></Route>
          <Route path="project" element={<ProjectList />}></Route>
          <Route path="update-project/:id" element={<UpdateProject />}></Route>
          <Route path="service" element={<ServiceList />}></Route>
          <Route path="create-service" element={<CreateService />}></Route>
          <Route path="update-service/:id" element={<UpdateService />}></Route>

          <Route path="instagram" element={<InstagramList />}></Route>
          <Route path="create-instagram" element={<CreateInstagram />}></Route>
          <Route
            path="update-instagram/:id"
            element={<UpdateInstagram />}
          ></Route>
          <Route path="package" element={<PackageList />}></Route>
          <Route path="update-package/:id" element={<UpdatePackage />}></Route>
          <Route path="create-package" element={<CreatePackage />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>

          <Route path="orders" element={<OrderList />}></Route>
          <Route path="my-order" element={<MyOrder />}></Route>
        </Route>
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
