import React from "react";
import { Navigate } from "react-router-dom";
// import { useComplaintContext } from "../utils/complaint_context";

const ProtectedRoute = ({ children, user }) => {
  // const { user } = useComplaintContext();
  // console.log(user);
  // const { children, user } = props;
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
