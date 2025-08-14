import React, { FC } from 'react';
import { CardNameProps } from 'src/shared/card/card.types';
import styles from './productItem.module.scss';

export const ProductItemActions: FC<CardNameProps> = ({ name }) => {
  return (
    <button className={styles.removeButton} aria-label={`Удалить ${name} из корзины`}>
      ×
    </button>
  );
};
