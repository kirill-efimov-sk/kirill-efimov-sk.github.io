import React, { FC } from 'react';
import styles from './productItem.module.scss';

interface ProductItemBodyProps {
  children: React.ReactNode;
}

export const ProductItemBody: FC<ProductItemBodyProps> = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};
