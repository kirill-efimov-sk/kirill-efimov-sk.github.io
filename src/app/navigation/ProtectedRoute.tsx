import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelectors } from 'src/app/store/slices/token';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, redirectPath = '/auth/signIn' }) => {
  const token = useSelector(tokenSelectors.get);
  const location = useLocation();

  if (token) return <>{children}</>;
  return <Navigate to={`${redirectPath}?next=${location.pathname}`} replace />;
};
