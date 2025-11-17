import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { AuthScreen } from 'src/pages/authScreen';

export interface RouterProviderProps {
  children?: React.ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  return (
    <BrowserRouter basename={'/'}>
      {children}
      <Routes>
        <Route path="/auth/*" element={<AuthScreen />} />
        <Route path="*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
