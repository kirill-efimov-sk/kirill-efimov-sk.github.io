import React, { FC } from 'react';
import { CartList } from 'src/widgets/cartList';
import styles from './cartScreen.module.scss';

export const CartScreen: FC = () => {
  return (
    <div className={styles.container}>
      <CartList />
    </div>
  );
};
