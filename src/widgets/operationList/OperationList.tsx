import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { OperationListRender } from './OperationListRender';
import { operationsSelectors, OperationsState } from 'src/app/store/slices/operations';
import { useIntersactionObserverLoader } from 'src/hooks/useIntersactionObserverLoader';
import styles from './operationList.module.scss';

export const OperationList: FC = () => {
  const { t } = useTranslation();
  const operations: OperationsState = useSelector(operationsSelectors.get);

  const { visibleItems, handleLoadMore } = useIntersactionObserverLoader(operations);

  return (
    <div className={styles.operations}>
      <Title className={`${styles.title}`}>{t('screens.OperationScreen.list.title')}</Title>
      <OperationListRender operations={visibleItems} onLoadMore={handleLoadMore}></OperationListRender>
    </div>
  );
};
