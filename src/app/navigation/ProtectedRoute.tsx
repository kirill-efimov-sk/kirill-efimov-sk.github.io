import React, { FC } from 'react';
import { Navigate, Location, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
}

type NavigationState = {
  from?: Location;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, redirectPath = '/auth' }) => {
  // позднее сюда нужно добавить вызов хука useSelector для получения данных об успешности аунтификации
  const token = true;
  const location = useLocation();

  if (token) return <>{children}</>;
  return <Navigate to={redirectPath} state={{ from: location } as NavigationState} replace />;
};
