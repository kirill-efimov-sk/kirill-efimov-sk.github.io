import { AuthFormValues } from 'src/features/forms/authForm/types';

export interface AuthScreenFormProps {
  initialUserData?: AuthFormValues;
  children?: React.ReactNode;
}

export interface AuthResult {
  token: string;
}

export interface AuthProps {
  email: string;
  password: string;
}
