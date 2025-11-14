import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { ProductListRender } from './ProductListRender';
import { productsSelectors, ProductsState } from 'src/app/store/slices/products';
import { useIntersactionObserverLoader } from 'src/hooks/useIntersactionObserverLoader';
import styles from './productList.module.scss';

export const ProductList: FC = () => {
  const { t } = useTranslation();
  const products: ProductsState = useSelector(productsSelectors.get);

  const { visibleItems, handleLoadMore } = useIntersactionObserverLoader(products);

  return (
    <div className={styles.products}>
      <Title className={`${styles.title}`}>{t('screens.ProductScreen.list.title')}</Title>
      <ProductListRender products={visibleItems} onLoadMore={handleLoadMore}></ProductListRender>
    </div>
  );
};
