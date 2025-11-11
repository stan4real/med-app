import { type JSX } from 'react';
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
    children:JSX.Element
}

const ProtectedRoute = ({ children }:ProtectedRouteProps) => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute