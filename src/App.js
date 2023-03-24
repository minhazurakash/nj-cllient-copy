import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BlogList from "./components/DashboardComponents/BlogList";
import ContactList from "./components/DashboardComponents/ContactList";
import CreateBlog from "./components/DashboardComponents/CreateBlog";
import CreateInstagram from "./components/DashboardComponents/CreateInstagram";
import CreatePackage from "./components/DashboardComponents/CreatePackage";
import CreateProject from "./components/DashboardComponents/CreateProject";
import CreateService from "./components/DashboardComponents/CreateService";
import CreateSlider from "./components/DashboardComponents/CreateSlider";
import InstagramList from "./components/DashboardComponents/InstagramList";
import MyOrder from "./components/DashboardComponents/MyOrder";
import OrderList from "./components/DashboardComponents/OrderList";
import PackageList from "./components/DashboardComponents/PackageList";
import ProjectList from "./components/DashboardComponents/ProjectList";
import ServiceList from "./components/DashboardComponents/ServiceList";
import SliderList from "./components/DashboardComponents/SliderList";
import UpdateBlog from "./components/DashboardComponents/updateBlog";
import UpdateContent from "./components/DashboardComponents/UpdateContent ";
import UpdateInstagram from "./components/DashboardComponents/UpdateInstagram";
import UpdatePackage from "./components/DashboardComponents/UpdatePackage";
import UpdateProject from "./components/DashboardComponents/UpdateProject";
import UpdateService from "./components/DashboardComponents/updateService";
import UpdateSlider from "./components/DashboardComponents/UpdateSlider";
import UserList from "./components/DashboardComponents/UserList";
import TitlesPage from "./components/TitlePage";
import AboutPage from "./pages/AboutPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import UserDashboardPage from "./pages/Dashboard/UserDashboardPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PackagePage from "./pages/PackagePage";
import PaymentPage from "./pages/PaymentPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import SignUpPage from "./pages/SignUpPage";
import TermsServicePage from "./pages/TermsServicePage";
import UnauthorizePage from "./pages/UnauthorizePage";
import Footer from "./shared/Footer";
import Navigation from "./shared/Navigation";
import RequireAuth from "./shared/RequireAuth";
import RequireRole from "./shared/RequireRole";

const App = () => {
  return (

    <>

      <Navigation />

      <Routes>
        <Route path="*" element={<UnauthorizePage />} />
        <Route path="/unauthorized" element={<UnauthorizePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path ="/user-dashboard" element={<UserDashboardPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/unauthorized" element={<UnauthorizePage/>}/> */}
        <Route
          path="/package"
          element={
            <RequireAuth>
              <PackagePage />
            </RequireAuth>
          }
        />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/terms-service" element={TermsServicePage}></Route>
        <Route path="/service" element={<ServicePage />} />
        <Route path="/packages" element={<PackagePage />} />
        <Route path="/payment/:packageId" element={<PaymentPage />} />
        <Route path="/projects" element={<ProjectPage />} />
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
          <Route path="create-blog" element={<CreateBlog />}></Route>
          <Route path="users" element={<UserList />}></Route>
          <Route path="blog" element={

            <RequireRole requiredRole={['admin','editor','super-admin']}>
              <BlogList />
            </RequireRole>
          } />
          <Route path="update-blog/:id" element={<UpdateBlog />}></Route>
          <Route path="create-service" element={<CreateService />}></Route>
          <Route path="Content" element={<UpdateContent />}></Route>
          <Route path="service" element={<ServiceList />}></Route>
          <Route path="update-service/:id" element={<UpdateService />}></Route>
          <Route path="update-slider/:id" element={<UpdateSlider />}></Route>
          <Route path="create-project" element={<CreateProject />}></Route>
          <Route path="project" element={<ProjectList />}></Route>
          <Route path="update-project/:id" element={<UpdateProject />}></Route>
          <Route path="instagram" element={<InstagramList />}></Route>
          <Route path="create-instagram" element={<CreateInstagram />}></Route>
          <Route
            path="update-instagram/:id"
            element={<UpdateInstagram />}
          ></Route>


          <Route path="contacts" element={<ContactList />}></Route>
          <Route path="package" element={<PackageList />}></Route>
          <Route path="update-package/:id" element={<UpdatePackage />}></Route>
          <Route path="create-package" element={<CreatePackage />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>


          <Route path="titles" element={<TitlesPage />}></Route>
          <Route path="orders" element={<OrderList />}></Route>
          <Route path="my-order" element={<MyOrder />}></Route>
          {/* <PrivateRoute
        path="blog" element={<BlogList />} allowedRoles={["admin"]}
      /> */}
        </Route>
      </Routes>


      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
