import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { SignInScreenForm } from 'src/pages/authScreen/singIn';

export interface RouterProviderProps {
  children?: React.ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/auth" element={<SignInScreenForm />} />
        <Route path="*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
