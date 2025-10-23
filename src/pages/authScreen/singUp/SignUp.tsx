import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../../features/forms';
import { Title } from '../../../shared/title';
import { AuthFormValues } from '../../../features/forms/authForm/types';
import { useSignUpForm } from '../../../hooks/forms/useSignUpForm';
import styles from './signUp.module.scss';

const initUserdata = {
  username: '',
  password: '',
  repeatPassword: '',
};

export interface SignUpFormProps {
  initialUserData: AuthFormValues;
}

export const SignUpScreenForm: React.FC<SignUpFormProps> = ({ initialUserData = initUserdata }) => {
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
      username: initialUserData.username,
      password: initialUserData.password,
      repeatPassword: initialUserData.repeatPassword,
    });
  }, [initialUserData, setValues]);

  return (
    <div className={`${styles.container}`}>
      <Title className={`${styles.title}`}>{t('screens.AuthScreen.signUp.title')}</Title>
      <UserForms.AuthForm formManager={formManager} repeatPassword={true} />
      <Button type="primary" onClick={submitForm} style={{ marginTop: '16px' }} loading={loading}>
        {t('screens.AuthScreen.signUp.submit')}
      </Button>
    </div>
  );
};
