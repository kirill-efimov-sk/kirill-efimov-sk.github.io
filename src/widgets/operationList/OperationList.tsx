import React, { FC, useCallback, useState } from 'react';
import { OperationListRender } from './OperationListRender';
import { useDataGenerator } from 'src/hooks/useDataGenerator';
import { Operation } from 'src/utils/dataListGenerator';
import styles from './operationList.module.scss';

export const OperationList: FC = () => {
  const { createOperations } = useDataGenerator();
  const [operations, setOperations] = useState<Operation[]>(() => createOperations(5));

  const handleLoadMore = useCallback(() => {
    setOperations((prev) => [...prev, ...createOperations(5)]);
  }, [createOperations]);

  return (
    <div className={styles.operations}>
      <h2>Список операций</h2>
      <OperationListRender operations={operations} onLoadMore={handleLoadMore}></OperationListRender>
    </div>
  );
};
