import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductList } from 'src/widgets/productList';
import styles from './productsScreen.module.scss';

export const ProductsScreen: FC = () => {
  return (
    <div className={styles.container}>
      <ProductList />
      <Outlet />
    </div>
  );
};
