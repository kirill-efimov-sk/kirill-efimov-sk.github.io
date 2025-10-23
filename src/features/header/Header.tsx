import React, { FC } from 'react';
import { Logo } from '../../shared/logo';
import styles from './header.module.scss';
import { useThemeContext, Theme } from '../../app/theming';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }): React.JSX.Element => {
  const { theme } = useThemeContext();
  const classTheme = theme?.includes(Theme.light) ? styles.headerLight : styles.headerDark;

  return (
    <header className={`${styles.header} ${classTheme}`}>
      <Logo />
      <div className={styles.contollers}>{children}</div>
    </header>
  );
};
