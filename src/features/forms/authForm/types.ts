import { FormProps } from 'src/features/forms/types';

export type AuthFormValues = {
  username: string;
  password: string;
  repeatPassword?: string;
};

export type AuthFormErrors = Record<keyof AuthFormValues, string>;
export type AuthFormTouched = Record<keyof AuthFormValues, boolean>;
export type AuthFromRepeatPassword = boolean;

export type AuthFormProps = FormProps<AuthFormValues> & { repeatPassword: AuthFromRepeatPassword };
