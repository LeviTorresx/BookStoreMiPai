import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAdmin = ({ userLog, redirect }) => {
  if (!userLog || userLog.userType !== "ADMINISTRATOR") {
    return <Navigate to={redirect} replace />;
  }
  return <Outlet/>
}

export default ProtectedRouteAdmin;
