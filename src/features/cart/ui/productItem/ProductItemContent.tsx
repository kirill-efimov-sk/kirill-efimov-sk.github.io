import React, { FC } from 'react';
import { BaseCardProps, CardQuantityProps } from 'src/shared/card/card.types';
import styles from './productItem.module.scss';

export interface ProductItemContentProps extends Omit<BaseCardProps, 'description'>, CardQuantityProps {
  priceRender: (price: number) => React.ReactNode;
}

export const ProductItemContent: FC<ProductItemContentProps> = ({ name, price, priceRender, quantity }) => {
  return (
    <div className={styles.info}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{priceRender(price)}</p>
      <p className={styles.quantity}>Количество: {quantity}</p>
    </div>
  );
};
