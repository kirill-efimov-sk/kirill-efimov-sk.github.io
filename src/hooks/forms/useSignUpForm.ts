import { useMemo, useState, useCallback } from 'react';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { AuthFormErrors, AuthFormValues } from 'src/features/forms/authForm/types';
import { regex } from '../../utils/regex';
import { isLongEnough, isNotDefinedString } from '../../utils/validation';

export interface SignUpFormProps {
  initialAuthData?: AuthFormValues;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useSignUpForm = (
  initialAuthData: AuthFormValues
): Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const initialValues = useMemo(
    () => ({
      username: initialAuthData.username ?? '',
      password: initialAuthData.password ?? '',
      repeatPassword: initialAuthData.repeatPassword ?? '',
    }),
    [initialAuthData]
  );

  const validate = useCallback(
    (values: AuthFormValues): Partial<AuthFormErrors> => {
      const errors: Partial<AuthFormErrors> = {};
      const symbols = '#&/\\|{}[]';

      if (isNotDefinedString(values.username)) {
        errors.username = t(`errors.is_required`);
      } else if (!EMAIL_REGEX.test(values.username.trim())) {
        errors.username = t('errors.invalid_email');
      }
      if (!isLongEnough(values.password, 8)) {
        errors.password = t(`errors.password_to_small`);
      }
      if (!isLongEnough(values.repeatPassword, 8)) {
        errors.repeatPassword = t(`errors.password_to_small`);
      }

      const fields: (keyof AuthFormValues)[] = ['username', 'password', 'repeatPassword'];
      fields.forEach((field) => {
        const value = values[field];
        const strValue = value?.toString();

        if (!strValue?.trim()) {
          errors[field] = t('errors.is_required');
        } else if (regex(symbols).test(strValue)) {
          errors[field] = t('errors.is_invalid');
        }
      });

      if (values.password !== values.repeatPassword) {
        errors.password = t('errors.password_not_match');
        errors.repeatPassword = t('errors.password_not_match');
      }

      return errors;
    },
    [t]
  );

  const onSubmit = useCallback(
    async (values: AuthFormValues, { resetForm }: { resetForm: () => void }) => {
      try {
        setLoading(true);
        console.log('Submitting sign up:', values);

        //Имитация API-запроса
        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.success(t('screens.AuthScreen.signUp.success'));
        resetForm();
      } catch (error) {
        message.error(t('screens.AuthScreen.signUp.error'));
      } finally {
        setLoading(false);
      }
    },
    [t]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
