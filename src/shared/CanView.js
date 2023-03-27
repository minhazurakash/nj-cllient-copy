import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../firebase.init";
import LoadingComponent from "./LoadingComponent";

const Canview = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();

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

   console.log(requiredRole);
   if (loading) {
    return <LoadingComponent />;
  }

  if (!requiredRole.includes(userRole)) {
    return " ";
    
  }else{
    return children;
  }
    

 
};

export default Canview;
