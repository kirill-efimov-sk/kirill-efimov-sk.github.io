import React from 'react';
import { useTranslation } from 'react-i18next';
import { Radio } from 'antd';
import { useLanguage, Locale } from '../../app/localization';
import styles from './langSwitcher.module.scss';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className={styles.localeController}>
      <div className={styles.localeHeader}>{t('switchLanguage')}</div>
      <Radio.Group value={language} onChange={(e) => setLanguage(e.target.value)} className={styles.languageSwitcher}>
        <Radio.Button value={Locale.en}>EN</Radio.Button>
        <Radio.Button value={Locale.ru}>RU</Radio.Button>
      </Radio.Group>
    </div>
  );
};
