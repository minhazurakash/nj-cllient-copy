import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import UserDashboardPage from "../pages/Dashboard/UserDashboardPage";
import Dashboard from "../pages/DashboardPage";
import LoadingComponent from "./LoadingComponent";

const RequireAdmin = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      fetch(`https://api.websitesprofessional.com/api/v1/user/${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          setUserRole(data.data.role);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
        });
    }
  
  }, [user]);

   console.log(requiredRole);
   if (loading) {
    return <LoadingComponent />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (userRole === "user") {
    return <UserDashboardPage/>
  
  }else{
    return <Dashboard/>
  }

};

export default RequireAdmin;
