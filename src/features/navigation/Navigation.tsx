import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingOutlined } from '@ant-design/icons';
import { Logout } from '../logout';
import { ProxyAdminRights, ProxyAuthRights } from 'src/app/proxy/accessRights';
import styles from './navigation.module.scss';

export const Navigation: FC = () => {
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
        <ProxyAuthRights>
          <ProxyAdminRights>
            <NavLink to="/administration" className={({ isActive }) => (isActive ? styles.active : '')}>
              <span className={styles.name}>{t('header.routes.over')}</span>
            </NavLink>
          </ProxyAdminRights>
        </ProxyAuthRights>
      </div>
      <div className={styles.navigateRight}>
        <ProxyAuthRights>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.name}>{t('header.routes.profile')}</span>
          </NavLink>
        </ProxyAuthRights>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : '')}>
          <ShoppingOutlined className={styles.cart} title={t('header.routes.cart')} />
        </NavLink>
        <ProxyAuthRights>
          <NavLink to="/auth">
            <Logout />
          </NavLink>
        </ProxyAuthRights>
      </div>
    </div>
  );
};
