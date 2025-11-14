import { useMemo, useCallback } from 'react';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { AuthFormErrors, AuthFormValues } from 'src/features/forms/authForm/types';
import { regex } from '../../utils/regex';
import { isLongEnough, isNotDefinedString } from '../../utils/validation';
import { tokenActions } from 'src/app/store/slices/token';
import { profileActions } from 'src/app/store/slices/profile';
import { api } from 'src/app/store/rtq';
import { EMAIL_REGEX } from 'src/app/constants/regex';
import { ApiErrorType } from 'src/app/store/rtq/authApi';

export interface SignInFormProps {
  initialAuthData?: AuthFormValues;
}

export const useSignInForm = (
  initialAuthData: AuthFormValues
): Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [signIn, { isLoading: loading }] = api.auth.useSignInMutation();

  const initialValues = useMemo(
    () => ({
      email: initialAuthData.email ?? '',
      password: initialAuthData.password ?? '',
    }),
    [initialAuthData]
  );

  const validate = useCallback(
    (values: AuthFormValues): Partial<AuthFormErrors> => {
      const errors: Partial<AuthFormErrors> = {};
      const symbols = '#&/\\|{}[]';

      if (isNotDefinedString(values.email)) {
        errors.email = t(`errors.is_required`);
      } else if (!EMAIL_REGEX.test(values.email.trim())) {
        errors.email = t('errors.invalid_email');
      }
      if (!isLongEnough(values.password, 8)) {
        errors.password = t(`errors.password_to_small`);
      }

      const fields: (keyof AuthFormValues)[] = ['email', 'password'];
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
        const result = await signIn({
          email: values.email,
          password: values.password,
        }).unwrap();

        message.success(t('screens.AuthScreen.signIn.success'));
        dispatch(tokenActions.set(result.token));
        dispatch(
          profileActions.set({
            name: values.email,
            about: '',
            rights: { editing: values.email.toLowerCase().includes('admin') ? true : false },
          })
        );

        resetForm();
      } catch (error) {
        const status = (error as ApiErrorType)?.status;
        message.error(`${t('screens.AuthScreen.signIn.error')}${status ? ` (${status})` : ''}`);
      }
    },
    [signIn, dispatch, t]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
