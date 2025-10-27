import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { MainScreen } from 'src/pages/mainScreen';
import { PageNotFound } from 'src/pages/pageNotFoundScreen';
import { OperationsScreen } from 'src/pages/operationsScreen';
import { ProfileScreenForm } from 'src/pages/profileScreen';
import { CartScreen } from 'src/pages/cartScreen';
import { ProductsScreen } from 'src/pages/productsScreen';
import { OverScreen } from 'src/pages/overScreen';
import { OperationModalViewer } from 'src/features/operation/modalViewer';
import { ProductModalViewer } from 'src/features/product/modalViewer';

export const ProtectedRoutes: FC = () => {
  return (
    <ProtectedRoute>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<MainScreen />} />
        <Route path="/operations" element={<OperationsScreen />}>
          <Route path=":id" element={<OperationModalViewer />} />
        </Route>
        <Route path="/products" element={<ProductsScreen />}>
          <Route path=":id" element={<ProductModalViewer />} />
        </Route>
        <Route path="/profile" element={<ProfileScreenForm />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/over" element={<OverScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ProtectedRoute>
  );
};
