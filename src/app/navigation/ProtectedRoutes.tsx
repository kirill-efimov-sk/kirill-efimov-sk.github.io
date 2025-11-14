import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { MainScreen } from 'src/pages/mainScreen';
import { PageNotFound } from 'src/pages/pageNotFoundScreen';
import { OperationsScreen } from 'src/pages/operationsScreen';
import { ProfileScreenForm } from 'src/pages/profileScreen';
import { CartScreen } from 'src/pages/cartScreen';
import { ProductsScreen } from 'src/pages/productsScreen';
import { ADMIN_ROUTES } from './routes/admin';

export const ProtectedRoutes: FC = () => {
  return (
    <ProtectedRoute>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/home" element={<MainScreen />} />
        <Route path="/operations" element={<OperationsScreen />}>
          <Route {...ADMIN_ROUTES.operationAdd} />
        </Route>
        <Route path="/products" element={<ProductsScreen />}>
          <Route {...ADMIN_ROUTES.productAdd} />
        </Route>
        <Route path="/profile" element={<ProfileScreenForm />} />
        <Route path="/cart" element={<CartScreen />} />
        {ADMIN_ROUTES.administration.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </ProtectedRoute>
  );
};
