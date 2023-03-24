import { Route, useNavigate } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
  const navigate = useNavigate();

  const isAuthenticated = true; // replace with your authentication logic
  const userRole = 'admin'; // replace with your user role retrieval logic

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  if (!roles.includes(userRole)) {
    navigate('/unauthorized');
    return null;
  }

  return <Route {...rest} element={<Component />} />;
}
