import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (token === null) {
    return <Navigate to="/signup" />;
  } else {
    const [id, email] = token.split(":");
    if (!id && !email) navigate("/signup");
  }

  return children;
};

export default PrivateRoute;
