import React, { FC } from 'react';
import { OperationList } from 'src/widgets/operationList';
import styles from './operationsScreen.module.scss';

export const OperationsScreen: FC = () => {
  return (
    <div className={styles.container}>
      <OperationList />
    </div>
  );
};
