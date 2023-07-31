import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("session-token");
  if (token) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/register" replace={true} />;
  }
}

export default Protected;
