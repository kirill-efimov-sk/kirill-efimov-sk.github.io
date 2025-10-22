import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, redirectPath = '/auth' }) => {
  // позднее сюда нужно добавить вызов хука для получения данных об успешности аунтификации
  const token = true;
  // пока нет auth Navigation по пути * перебросит на /home!
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
