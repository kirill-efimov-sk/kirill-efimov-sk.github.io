import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './404.module.scss';

export const PageNotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t('screens.PageNotFoundScreen.h1')}</h1>
      <p>{t('screens.PageNotFoundScreen.text')}</p>
    </div>
  );
};
