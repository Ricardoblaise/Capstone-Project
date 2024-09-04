import React from "react";
import { Navigate } from "react-router-dom";
const useAuth = () => {

    return false;
};


const ProtectedRoute = ({ element }) => {
   return useAuth() ? elememt : <Navigate to="/" />;
};


export default ProtectedRoute;