import { FormProps } from 'src/features/forms/types';
import { BaseCardProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductFormValues extends Omit<BaseCardProps, 'children'>, CardImageProps {
  id: string;
  categoryId: string;
  file?: File | null;
}

export type ProductFormErrors = Record<keyof ProductFormValues, string>;
export type ProductFormTouched = Record<keyof ProductFormValues, boolean>;
export type ProductFormFileSelect = (file: File | null) => void;

export type ProductFormProps = FormProps<ProductFormValues>;
