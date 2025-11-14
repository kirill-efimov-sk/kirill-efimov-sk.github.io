import React, { FC, useMemo } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SignInScreenForm } from './singIn';
import { SignUpScreenForm } from './singUp';
import { useAuth } from 'src/hooks/useAuth';
import styles from './authScreen.module.scss';

export enum AuthMode {
  signIn = 'signIn',
  signUp = 'signUp',
}

export type Params = { mode: AuthMode; token?: string };

export const AuthScreen: FC = () => {
  useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const path = useMemo(() => location.pathname.split('/').slice(0, -1).join('/'), [location.pathname]);

  const signInPage = (
    <>
      <div className={styles.auth}>
        <SignInScreenForm></SignInScreenForm>
        <div className={styles.linkContainer}>
          {t(`screens.AuthScreen.signUp.question`)}
          <Link to={`${path}/${AuthMode.signUp}`}>{t(`screens.AuthScreen.signUp.title`)}</Link>
        </div>
      </div>
    </>
  );

  const signUpPage = (
    <>
      <div className={styles.auth}>
        <SignUpScreenForm></SignUpScreenForm>
        <div className={styles.linkContainer}>
          {t(`screens.AuthScreen.signIn.question`)}
          <Link to={`${path}/${AuthMode.signIn}`}>{t(`screens.AuthScreen.signIn.title`)}</Link>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.root}>
      <div className={styles.frame}>
        <Routes>
          <Route index element={<Navigate to={AuthMode.signIn} state={location.state} replace />} />
          <Route path={AuthMode.signIn} element={signInPage} />
          <Route path={AuthMode.signUp} element={signUpPage} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthScreen;
