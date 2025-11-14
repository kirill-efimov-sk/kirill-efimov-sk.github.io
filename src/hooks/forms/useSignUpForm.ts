import { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { AuthFormErrors, AuthFormValues } from 'src/features/forms/authForm/types';
import { regex } from 'src/utils/regex';
import { isLongEnough, isNotDefinedString } from 'src/utils/validation';
import { tokenActions } from 'src/app/store/slices/token';
import { NavigationState } from 'src/app/navigation/types';
import { api } from 'src/app/store/rtq';
import { baseUrl, commandId } from 'src/app/constants/general';
import { EMAIL_REGEX } from 'src/app/constants/regex';
import { ApiErrorType } from 'src/app/store/rtq/authApi';
import { fetchClient } from 'src/utils/fetch';
import { AuthResult } from 'src/pages/authScreen/types';
import { profileActions } from 'src/app/store/slices/profile';

export interface SignUpFormProps {
  initialAuthData?: AuthFormValues;
}

export const useSignUpForm = (
  initialAuthData: AuthFormValues
): Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [signUp, { isLoading: loading }] = api.auth.useSignUpMutation();

  const initialValues = useMemo(
    () => ({
      email: initialAuthData.email ?? '',
      password: initialAuthData.password ?? '',
      repeatPassword: initialAuthData.repeatPassword ?? '',
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
      if (!isLongEnough(values.repeatPassword, 8)) {
        errors.repeatPassword = t(`errors.password_to_small`);
      }

      const fields: (keyof AuthFormValues)[] = ['email', 'password', 'repeatPassword'];
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
    async (values: AuthFormValues & { requestType: string }, { resetForm }: { resetForm: () => void }) => {
      try {
        let result: AuthResult;
        if (values.requestType === 'FETCH') {
          result = await fetchClient<AuthResult>(`${baseUrl}/signup`, {
            method: 'POST',
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              commandId,
            }),
          });
        }

        if (values.requestType === 'RTQ') {
          result = await signUp({
            email: values.email,
            password: values.password,
          }).unwrap();
        }

        message.success(t('screens.AuthScreen.signUp.success'));
        dispatch(tokenActions.set(result.token));
        dispatch(
          profileActions.set({
            name: values.email,
            about: '',
            rights: { editing: values.email.toLowerCase().includes('admin') ? true : false },
          })
        );

        resetForm();
        navigate(`${(location.state as NavigationState)?.from || '/'}?next=/`);
      } catch (error) {
        const status = (error as ApiErrorType)?.status;
        message.error(t(`${t('screens.AuthScreen.signUp.error')}${status ? ` (${status})` : ''}`));
      }
    },
    [dispatch, location.state, navigate, signUp, t]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
