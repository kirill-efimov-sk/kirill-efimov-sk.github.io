import { FormProps } from 'src/features/forms/types';

export interface CategoryFormValues {
  id: string;
  name: string;
  file?: File | null;
}

export type CategoryFormErrors = Record<keyof CategoryFormValues, string>;
export type CategoryFormTouched = Record<keyof CategoryFormValues, boolean>;
export type CategoryFormFileSelect = (file: File | null) => void;

export type CategoryFormProps = FormProps<CategoryFormValues>;
