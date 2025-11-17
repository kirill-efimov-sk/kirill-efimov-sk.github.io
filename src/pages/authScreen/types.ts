import { AuthFormValues } from 'src/features/forms/authForm/types';

export interface AuthScreenFormProps {
  initialUserData?: AuthFormValues;
  children?: React.ReactNode;
}
