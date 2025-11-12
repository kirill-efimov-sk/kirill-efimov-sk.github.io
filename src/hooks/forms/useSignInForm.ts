import { useMemo, useState, useCallback } from 'react';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { AuthFormErrors, AuthFormValues } from 'src/features/forms/authForm/types';
import { regex } from '../../utils/regex';
import { isLongEnough, isNotDefinedString } from '../../utils/validation';
import { tokenActions } from 'src/app/store/slices/token';
import { profileActions } from 'src/app/store/slices/profile';

export interface SignInFormProps {
  initialAuthData?: AuthFormValues;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOKEN_FAKE = '13ewefe534tfscaewtgvfcdas';

export const useSignInForm = (
  initialAuthData: AuthFormValues
): Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = useMemo(
    () => ({
      username: initialAuthData.username ?? '',
      password: initialAuthData.password ?? '',
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

      const fields: (keyof AuthFormValues)[] = ['username', 'password'];
      fields.forEach((field) => {
        const value = values[field];
        const strValue = value?.toString();

        if (!strValue?.trim()) {
          errors[field] = t('errors.is_required');
        } else if (regex(symbols).test(strValue)) {
          errors[field] = t('errors.is_invalid');
        }
      });

      return errors;
    },
    [t]
  );

  const onSubmit = useCallback(
    async (values: AuthFormValues, { resetForm }: { resetForm: () => void }) => {
      try {
        setLoading(true);

        //Имитация API-запроса
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve;

            if (TOKEN_FAKE) {
              dispatch(tokenActions.set(TOKEN_FAKE));
              dispatch(
                profileActions.set({
                  name: values.username,
                  about: '',
                  rights: { editing: values.username.toLowerCase().includes('admin') ? true : false },
                })
              );

              message.success(t('screens.AuthScreen.signIn.success'));
            }
          }, 1000)
        );

        resetForm();
      } catch (error) {
        message.error(t('screens.AuthScreen.signIn.error'));
      } finally {
        setLoading(false);
      }
    },
    [t, dispatch]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
