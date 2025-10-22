import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { ProductListRender } from './ProductListRender';
import { useDataGenerator } from 'src/hooks/useDataGenerator';
import { Product } from 'src/utils/dataListGenerator';
import styles from './productList.module.scss';

export const ProductList: FC = () => {
  const { t } = useTranslation();
  const { createProducts } = useDataGenerator();
  const [products, setProducts] = useState<Product[]>(() => createProducts(5));

  const handleLoadMore = useCallback(() => {
    setProducts((prev) => [...prev, ...createProducts(5)]);
  }, [createProducts]);

  return (
    <div className={styles.products}>
      <Title className={`${styles.title}`}>{t('screens.ProductScreen.list.title')}</Title>
      <ProductListRender products={products} onLoadMore={handleLoadMore}></ProductListRender>
    </div>
  );
};
