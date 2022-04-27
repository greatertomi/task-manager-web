import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

type AuthGuardProps = {
  children: JSX.Element;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  console.log('isAuthenticated', isAuthenticated());

  if (isAuthenticated()) {
    return (
      <Navigate to="/signup" replace state={{ path: location.pathname }} />
    );
  }

  return children;
};
