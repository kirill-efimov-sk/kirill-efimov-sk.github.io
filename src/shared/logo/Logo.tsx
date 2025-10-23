import React, { FC } from 'react';
import styles from './logo.module.scss';
import { NavLink } from 'react-router-dom';

export const Logo: FC = (): React.JSX.Element => {
  return (
    <div className={styles.logo} aria-label="Логотип">
      <NavLink to="/home">{'\u{1F47E}'}</NavLink>
    </div>
  );
};
