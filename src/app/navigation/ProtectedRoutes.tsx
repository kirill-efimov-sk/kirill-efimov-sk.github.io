import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from './ProtectedRoute';
import { MainScreen } from 'src/pages/mainScreen';
import { PageNotFound } from 'src/pages/pageNotFoundScreen';
import { OperationsScreen } from 'src/pages/operationsScreen';
import { ProfileScreenForm } from 'src/pages/profileScreen';
import { CartScreen } from 'src/pages/cartScreen';
import { ProductsScreen } from 'src/pages/productsScreen';
import { AdminScreen } from 'src/pages/adminScreen';
import { OperationModalViewer } from 'src/features/operation/modalViewer';
import { ProductModalViewer } from 'src/features/product/modalViewer';
import { profileSelectors } from 'src/app/store/slices/profile';

const ADMIN_ROUTES = {
  administration: [{ path: '/administration', element: <AdminScreen /> }],
  operationAdd: { path: ':add', element: <OperationModalViewer /> },
  productAdd: { path: ':add', element: <ProductModalViewer /> },
};

export const ProtectedRoutes: FC = () => {
  const profile = useSelector(profileSelectors.get);

  return (
    <ProtectedRoute>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/home" element={<MainScreen />} />
        <Route path="/operations" element={<OperationsScreen />}>
          {profile?.rights.editing && <Route {...ADMIN_ROUTES.operationAdd} />}
        </Route>
        <Route path="/products" element={<ProductsScreen />}>
          {profile?.rights.editing && <Route {...ADMIN_ROUTES.productAdd} />}
        </Route>
        <Route path="/profile" element={<ProfileScreenForm />} />
        <Route path="/cart" element={<CartScreen />} />
        {profile?.rights.editing &&
          ADMIN_ROUTES.administration.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
      </Routes>
    </ProtectedRoute>
  );
};
