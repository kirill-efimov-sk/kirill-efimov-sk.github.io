import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../../features/forms';
import { Title } from '../../../shared/title';
import { AuthFormValues } from '../../../features/forms/authForm/types';
import { useSignUpForm } from '../../../hooks/forms/useSignUpForm';
import { AuthScreenFormProps } from '../types';
import styles from './signUp.module.scss';

const initUserdata = {
  email: '',
  password: '',
  repeatPassword: '',
  requestType: '',
};

export const SignUpFetchScreenForm: React.FC<AuthScreenFormProps> = ({ initialUserData = initUserdata, children }) => {
  const { t } = useTranslation();

  const { initialValues, onSubmit, validate, loading } = useSignUpForm(initialUserData);

  const formManager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit,
    validate,
    enableReinitialize: true,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({
      email: initialUserData.email,
      password: initialUserData.password,
      repeatPassword: initialUserData.repeatPassword,
      requestType: 'FETCH',
    });
  }, [initialUserData, setValues]);

  return (
    <div className={styles.container}>
      <Title className={styles.title}>{t('screens.AuthScreen.signUp.title')}</Title>
      <UserForms.AuthForm formManager={formManager} repeatPassword={true} />
      <Button className={styles.button} type="primary" onClick={submitForm} loading={loading}>
        {`${t('screens.AuthScreen.signUp.submit')}`}
      </Button>
      {children}
    </div>
  );
};
