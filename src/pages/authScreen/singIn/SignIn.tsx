import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../../features/forms';
import { Title } from '../../../shared/title';
import { AuthFormValues } from '../../../features/forms/authForm/types';
import { useSignInForm } from '../../../hooks/forms/useSignInForm';
import styles from './signIn.module.scss';

const initUserdata = {
  username: '',
  password: '',
};

export interface SignInFormProps {
  initialUserData: AuthFormValues;
}

export const SignInScreenForm: React.FC<SignInFormProps> = ({ initialUserData = initUserdata }) => {
  const { t } = useTranslation();

  const { initialValues, onSubmit, validate, loading } = useSignInForm(initialUserData);

  const formManager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit,
    validate,
    enableReinitialize: true,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({
      username: initialUserData.username,
      password: initialUserData.password,
    });
  }, [initialUserData, setValues]);

  return (
    <div className={`${styles.container}`}>
      <Title className={`${styles.title}`}>{t('screens.AuthScreen.signIn.title')}</Title>
      <UserForms.AuthForm formManager={formManager} repeatPassword={false} />
      <Button type="primary" onClick={submitForm} style={{ marginTop: '16px' }} loading={loading}>
        {t('screens.AuthScreen.signIn.submit')}
      </Button>
    </div>
  );
};
