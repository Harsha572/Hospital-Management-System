import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRole, children }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  if (allowedRole && currentUser.role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
