import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { CartListRender } from './CartListRender';
import { useDataGenerator } from 'src/hooks/useDataGenerator';
import { Product } from 'src/utils/dataListGenerator';
import styles from './cartList.module.scss';

export const CartList: FC = () => {
  const { t } = useTranslation();
  const { createProducts } = useDataGenerator();
  const [products, setProducts] = useState<Product[]>(() => createProducts(5));

  const handleLoadMore = useCallback(() => {
    setProducts((prev) => [...prev, ...createProducts(5)]);
  }, [createProducts]);

  return (
    <div className={styles.cart}>
      <Title className={`${styles.title}`}>{t('screens.CartScreen.list.title')}</Title>
      <CartListRender products={products} onLoadMore={handleLoadMore}></CartListRender>
    </div>
  );
};
