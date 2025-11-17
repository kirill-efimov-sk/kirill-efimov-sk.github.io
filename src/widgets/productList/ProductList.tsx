import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { ProductListRender } from './ProductListRender';
import { useIntersactionObserverLoader } from 'src/hooks/product/useIntersactionObserverLoader';
import styles from './productList.module.scss';

export const ProductList: FC = () => {
  const { t } = useTranslation();

  const { isLoading, hasMoreItems, handleLoadMore } = useIntersactionObserverLoader();

  return (
    <div className={styles.products}>
      <Title className={`${styles.title}`}>{t('screens.ProductScreen.list.title')}</Title>
      <ProductListRender
        onLoadMore={handleLoadMore}
        isLoading={isLoading}
        hasMoreItems={hasMoreItems}
      ></ProductListRender>
    </div>
  );
};
