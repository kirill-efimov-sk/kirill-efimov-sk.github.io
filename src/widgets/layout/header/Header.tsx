import React, { FC } from 'react';
import { Logo } from '../../../shared/logo';
import styles from './header.module.scss';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }): React.JSX.Element => {
  return (
    <header className={styles.headerLight}>
      <Logo />
      <div>{children}</div>
    </header>
  );
};
