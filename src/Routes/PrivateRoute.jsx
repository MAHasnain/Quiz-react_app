import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { auth } = useSelector((state) => state.persistedReducer);

  return auth.isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;
