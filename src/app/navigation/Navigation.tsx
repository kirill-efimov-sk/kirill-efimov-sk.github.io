import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { MainScreen } from 'src/pages/mainScreen';
import { PageNotFound } from 'src/pages/pageNotFoundScreen';
import { OperationsScreen } from 'src/pages/operationsScreen';
import { ProfileScreenForm } from 'src/pages/profileScreen';
import { CartScreen } from 'src/pages/cartScreen';
import { ProductsScreen } from 'src/pages/productsScreen';

export interface NavigationProps {
  children?: React.ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<MainScreen />} />
        <Route
          path="/operations"
          element={
            <ProtectedRoute>
              <OperationsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreenForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
