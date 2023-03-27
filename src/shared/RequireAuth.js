import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import LoadingOverlay from "./LoadingOverlay";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [userRole, setUserRole] = useState(null);

  const requiredRole = ['admin','editor','super-admin']

  useEffect(() => {
    if (user) {
      fetch(`https://api.websitesprofessional.com/api/v1/user/${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          //  console.log(data.data.role);
          setUserRole(data.data.role);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
        });
    }
  }, [user]);

  if (loading) {
    return <LoadingOverlay />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }else{
    return children;
  }

  // if (!requiredRole.includes(userRole)) {
  //   return <UnauthorizePage/>
  // }


  
};

export default RequireAuth;
