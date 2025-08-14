import React, { FC } from 'react';
import styles from './card.module.scss';

interface CardContainerProps {
  type: 'block' | 'inline';
  children: React.ReactNode;
}

export const CardContainer: FC<CardContainerProps> = ({ type, children }) => {
  return <div className={`${styles.card} ${styles[type]}`}>{children}</div>;
};
