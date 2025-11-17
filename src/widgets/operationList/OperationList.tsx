import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { OperationListRender } from './OperationListRender';
import { useIntersactionObserverLoader } from 'src/hooks/product/useIntersactionObserverLoader';
import styles from './operationList.module.scss';

export const OperationList: FC = () => {
  const { t } = useTranslation();

  const { handleLoadMore } = useIntersactionObserverLoader();

  return (
    <div className={styles.operations}>
      <Title className={`${styles.title}`}>{t('screens.OperationScreen.list.title')}</Title>
      <OperationListRender onLoadMore={handleLoadMore}></OperationListRender>
    </div>
  );
};
