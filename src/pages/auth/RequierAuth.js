import { useContext } from "react";
import { User } from "../../context/Context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequierAuth() {
  const user = useContext(User);
  const location = useLocation();
  return user.auth.userData ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to="/login" />
  );
}

export default RequierAuth;
