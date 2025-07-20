import React, { FC } from 'react';
import styles from './logo.module.scss';

export const Logo: FC = (): React.JSX.Element => {
  return (
    <div className={styles.logo} aria-label="Логотип">
      {'\u{1F47E}'}
    </div>
  );
};
