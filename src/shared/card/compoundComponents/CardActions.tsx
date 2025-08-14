import React, { FC } from 'react';
import styles from './card.module.scss';

type CardActionsProps = { children?: React.ReactNode };

export const CardActions: FC<CardActionsProps> = ({ children }) => {
  return children && <div className={styles.actions}>{children}</div>;
};
