import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { OperationList } from 'src/widgets/operationList';
import styles from './operationsScreen.module.scss';

export const OperationsScreen: FC = () => {
  return (
    <div className={styles.container}>
      <OperationList />
      <Outlet />
    </div>
  );
};
