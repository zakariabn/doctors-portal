import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  let location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!admin) {
    toast.error("You don't have permission to go there", {
      toastId: "adminRequire",
    });
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
};
export default RequireAdmin;
