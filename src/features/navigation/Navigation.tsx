import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { tokenSelectors } from 'src/app/store/slices/token';
import { profileSelectors } from 'src/app/store/slices/profile';
import { Logout } from '../logout';
import styles from './navigation.module.scss';

export const Navigation: FC = () => {
  const token = useSelector(tokenSelectors.get);
  const profile = useSelector(profileSelectors.get);
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
        {token && profile?.rights.editing && (
          <NavLink to="/administration" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.name}>{t('header.routes.over')}</span>
          </NavLink>
        )}
      </div>
      <div className={styles.navigateRight}>
        {token && (
          <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.name}>{t('header.routes.profile')}</span>
          </NavLink>
        )}
        <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : '')}>
          <ShoppingOutlined className={styles.cart} title={t('header.routes.cart')} />
        </NavLink>
        {token && (
          <NavLink to="/auth">
            <Logout />
          </NavLink>
        )}
      </div>
    </div>
  );
};
