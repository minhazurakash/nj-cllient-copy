import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import LoadingOverlay from "./LoadingOverlay";

const RedirectDashboard = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
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


if (!userRole) {
    <LoadingOverlay/>
}else{
    if (userRole !== `user`) {
        navigate('/dashboard')
        
      }else{
        navigate('/user-profile')
        
      }
}
  

};

export default RedirectDashboard;
