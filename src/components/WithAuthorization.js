import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';

const WithAuthorization = (WrappedComponent, allowedRoles) => {
  const [userData] = useAuthState(auth);
  const userEmail = userData?.email;
  const ProtectedRoute = ({ ...props }) => {
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const getUserRole = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/user/${userEmail}`);
          setUserRole(response.data.role);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getUserRole();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!userRole || !allowedRoles.includes(userRole)) {
      return <Navigate to="/unauthorize" />;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default WithAuthorization;
