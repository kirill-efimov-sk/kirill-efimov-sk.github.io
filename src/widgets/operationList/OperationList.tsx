import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { OperationListRender } from './OperationListRender';
import { useDataGenerator } from 'src/hooks/useDataGenerator';
import { Operation } from 'src/utils/dataListGenerator';
import styles from './operationList.module.scss';

export const OperationList: FC = () => {
  const { t } = useTranslation();
  const { createOperations } = useDataGenerator();
  const [operations, setOperations] = useState<Operation[]>(() => createOperations(5));

  const handleLoadMore = useCallback(() => {
    setOperations((prev) => [...prev, ...createOperations(5)]);
  }, [createOperations]);

  return (
    <div className={styles.operations}>
      <Title className={`${styles.title}`}>{t('screens.OperationScreen.list.title')}</Title>
      <OperationListRender operations={operations} onLoadMore={handleLoadMore}></OperationListRender>
    </div>
  );
};
