import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { auth } = useSelector((state) => state.persistedReducer);

  return auth.isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Outlet />;
};

export default PublicRoute;
