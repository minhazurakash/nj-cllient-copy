import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const IsUser = ({ requiredRole, children }) => {
  const [user, loading] = useAuthState(auth);
  const [userRole, setUserRole] = useState(null);

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

  if (loading) {
    return null;
  }

  if (userRole == "user") {
    return true;
  } else {
    return false;
  }


};

export default IsUser;
