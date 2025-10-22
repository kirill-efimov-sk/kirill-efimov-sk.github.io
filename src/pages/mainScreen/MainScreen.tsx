import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './mainScreen.module.scss';

export const MainScreen: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t('screens.MainScreen.h1')}</h1>
      <p>{t('screens.MainScreen.text')}</p>
    </div>
  );
};
