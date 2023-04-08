import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BlogList from "./components/DashboardComponents/BlogList";
import ContactList from "./components/DashboardComponents/ContactList";
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
import UpdateContent from "./components/DashboardComponents/UpdateContent ";
import UpdateInstagram from "./components/DashboardComponents/UpdateInstagram";
import UpdatePackage from "./components/DashboardComponents/UpdatePackage";
import UpdateProject from "./components/DashboardComponents/UpdateProject";
import UpdateSlider from "./components/DashboardComponents/UpdateSlider";
import UserList from "./components/DashboardComponents/UserList";
import UpdateBlog from "./components/DashboardComponents/updateBlog";
import UpdateService from "./components/DashboardComponents/updateService";
import TitlesPage from "./components/TitlePage";
import AboutPage from "./pages/AboutPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Profile from "./pages/Dashboard/Component/Profile";
import Dashboard from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
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
import RedirectDashboard from "./shared/RedirectDashboard";
import RequireAuth from "./shared/RequireAuth";
import RequireRole from "./shared/RequireRole";

const App = () => {
  return (

    <>

      <Navigation />

      <Routes>


        <Route path="/redirectuser" element={<RedirectDashboard />} />
        <Route path="*" element={<UnauthorizePage />} />
        <Route path="/unauthorized" element={<UnauthorizePage />} />
        <Route path="/" element={<HomePage />} />
        
        {/* <Route path="/user-dashboard" element={<UserDashboardPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        {/* <Route path="/unauthorized" element={<UnauthorizePage/>}/> */}
        <Route
          path="/package"
          element={
            <RequireAuth>
              <PackagePage />
            </RequireAuth>
          }
        />
          {/* <Route path="user-panel" element={<Panel />} ></Route>
          <Route
          path="/user-panel"
          
        > */}
        <Route path="user-profile" element={
        <RequireAuth>
           <Profile />
        </RequireAuth>
       }></Route>
        {/* </Route> */}
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
              <Dashboard/>
            </RequireAuth>
          }
        >
          <Route index element={<h1>Hello User !</h1>}></Route>
          <Route path="profile" element={<h1>Hello User !</h1>}></Route>
          <Route path="create-slider" element={<CreateSlider />}></Route>
          <Route path="slider" element={<SliderList />}></Route>

          <Route path="users" element={
            <RequireRole requiredRole={['admin','editor', 'super-admin']}>
              <UserList />
            </RequireRole>
          } />


          <Route path="update-blog/:id" element={
            <RequireRole requiredRole={['editor', 'super-admin']}>
              <UpdateBlog />
            </RequireRole>
          }></Route>

          <Route path="create-service" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <CreateService />
            </RequireRole>
          }></Route>
          
          <Route path="Content" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <UpdateContent />
            </RequireRole>
          }></Route>

          <Route path="service" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <ServiceList />
            </RequireRole>
          }></Route>

          <Route path="update-service/:id" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <UpdateService />
            </RequireRole>
          }></Route>

          <Route path="update-slider/:id" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <UpdateSlider />
            </RequireRole>
          }></Route>

          <Route path="create-project" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <CreateProject />
            </RequireRole>
          }></Route>

          <Route path="project" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <ProjectList />
            </RequireRole>
          }></Route>
          
          <Route path="update-project/:id" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <UpdateProject />
            </RequireRole>
          }></Route>

          <Route path="instagram" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <InstagramList />
            </RequireRole>
          }></Route>

          <Route path="create-instagram" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <CreateInstagram />
            </RequireRole>
          }></Route>

          <Route path="update-instagram/:id" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <UpdateInstagram />
            </RequireRole>
          }></Route>

          <Route path="blog" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <BlogList />
            </RequireRole>
          }></Route>

          <Route path="contacts" element={
            <RequireRole requiredRole={['admin', 'editor', 'super-admin']}>
              <ContactList />
            </RequireRole>
          }></Route>

          <Route path="package" element={
            <RequireRole requiredRole={['admin','editor','super-admin']}>
              <PackageList />
            </RequireRole>
          }></Route>

          <Route path="update-package/:id" element={
            <RequireRole requiredRole={['admin','super-admin']}>
              <UpdatePackage />
            </RequireRole>
          }></Route>

          <Route path="create-package" element={
            <RequireRole requiredRole={['admin','super-admin']}>
              <CreatePackage />
            </RequireRole>
          }></Route>

          <Route path="titles" element={
            <RequireRole requiredRole={['admin','super-admin']}>
              <TitlesPage />
            </RequireRole>
          }></Route>

          <Route path="orders" element={
            <RequireRole requiredRole={['admin','super-admin', 'editor']}>
              <OrderList />
            </RequireRole>
          }></Route>

          <Route path="my-order" element={<MyOrder />}></Route>

          <Route path="*" element={<h1>Not Found</h1>}></Route>



          {/* <PrivateRoute
        path="blog" element={<BlogList />} allowedRoles={["admin"]}
      /> */}
        </Route>
        
      </Routes>


      
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
