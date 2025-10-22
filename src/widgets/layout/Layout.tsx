import React, { FC } from 'react';
import { Header } from '../../features/header';
import { LanguageSwitcher } from '../../features/langSwitcher';
import { ThemeSwitcher } from '../../features/themeSwitcher';
import styles from './layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }): React.JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </Header>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
