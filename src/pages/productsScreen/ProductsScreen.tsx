import React, { FC } from 'react';
import { ProductList } from 'src/widgets/productList';
import styles from './productsScreen.module.scss';

export const ProductsScreen: FC = () => {
  return (
    <div className={styles.container}>
      <ProductList />
    </div>
  );
};
