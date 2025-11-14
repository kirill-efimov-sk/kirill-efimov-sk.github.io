import { FormProps } from 'src/features/forms/types';

export type ProfileFormValues = {
  name: string;
  about: string;
  rights: { editing: boolean };
};

export type ProfileFormErrors = Record<keyof ProfileFormValues, string>;
export type ProfileFormTouched = Record<keyof ProfileFormValues, boolean>;

export type ProfileFormProps = FormProps<ProfileFormValues>;
