import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loading) return <p>Loading ...</p>;
  if (!user) return <Navigate state={pathname} to={"/auth/signin"} />;
  return children;
}

export default PrivateRoutes;
