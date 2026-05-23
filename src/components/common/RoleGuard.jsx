import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RoleGuard({ children, allowedRoles }) {
  const { user } = useAuth();

  // If no user or no role → redirect to login
  if (!user || !user.role) {
    return <Navigate to="/login" replace />;
  }

  // If user's role is NOT allowed → redirect to their correct dashboard
  if (!allowedRoles.includes(user.role)) {
    switch (user.role) {
      case "ADMIN":
        return <Navigate to="/" replace />;
      case "DOCTOR":
        return <Navigate to="/doctor" replace />;
      case "PATIENT":
        return <Navigate to="/patient" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  // Role is allowed → render the page
  return children;
}
