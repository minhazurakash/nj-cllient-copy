import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import UnauthorizePage from "../pages/UnauthorizePage";
import LoadingComponent from "./LoadingComponent";

const RoleAuth = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/v1/user/${user.email}`)
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

   console.log(requiredRole);
   if (loading) {
    return <LoadingComponent />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (!requiredRole.includes(userRole)) {
    return <UnauthorizePage/>
    
  }else{
    return children;
  }
    

 
};

export default RoleAuth;
