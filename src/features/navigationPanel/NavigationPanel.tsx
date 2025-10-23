import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingOutlined } from '@ant-design/icons';
import styles from './navigationPanel.module.scss';

export const NavigationPanel: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.navigate}>
      <div className={styles.navigateLeft}>
        <NavLink to="/operations" className={({ isActive }) => (isActive ? styles.active : '')}>
          <span className={styles.name}>{t('header.routes.operations')}</span>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : '')}>
          <span className={styles.name}>{t('header.routes.products')}</span>
        </NavLink>
      </div>
      <div className={styles.navigateRight}>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : '')}>
          <span className={styles.name}>{t('header.routes.profile')}</span>
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : '')}>
          <ShoppingOutlined className={styles.cart} title={t('header.routes.cart')} />
        </NavLink>
      </div>
    </div>
  );
};
