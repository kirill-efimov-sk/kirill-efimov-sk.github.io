import React, { FC } from 'react';
import { Logo } from '../../shared/logo';
import { useThemeContext, Theme } from '../../app/theming';
import { NavigationPanel } from '../navigationPanel';
import styles from './header.module.scss';

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }): React.JSX.Element => {
  const { theme } = useThemeContext();
  const classTheme = theme?.includes(Theme.light) ? styles.headerLight : styles.headerDark;

  return (
    <header className={`${styles.header} ${classTheme}`}>
      <Logo />
      <NavigationPanel />
      <div className={styles.contollers}>{children}</div>
    </header>
  );
};
