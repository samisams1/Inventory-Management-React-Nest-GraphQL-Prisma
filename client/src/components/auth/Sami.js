import React from 'react';
import { Navigate } from 'react-router-dom';

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Return true if the user is authenticated, false otherwise
};

const ProtectedRoute = ({element }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;