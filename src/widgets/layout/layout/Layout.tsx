import React, { FC } from 'react';
import { Header } from '../header';
import styles from './layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }): React.JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
