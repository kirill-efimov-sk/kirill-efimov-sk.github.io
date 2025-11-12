import React from 'react';
import { AdminScreen } from 'src/pages/adminScreen';
import { OperationModalViewer } from 'src/features/operation/modalViewer';
import { ProductModalViewer } from 'src/features/product/modalViewer';
import { ProxyAdminRights } from '../../proxy/accessRights';

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const ADMIN_ROUTES: {
  administration: RouteConfig[];
  operationAdd: RouteConfig;
  productAdd: RouteConfig;
} = {
  administration: [
    {
      path: '/administration',
      element: (
        <ProxyAdminRights>
          <AdminScreen />
        </ProxyAdminRights>
      ),
    },
  ],
  operationAdd: {
    path: ':add',
    element: (
      <ProxyAdminRights>
        <OperationModalViewer />
      </ProxyAdminRights>
    ),
  },
  productAdd: {
    path: ':add',
    element: (
      <ProxyAdminRights>
        <ProductModalViewer />
      </ProxyAdminRights>
    ),
  },
};
