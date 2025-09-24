import { FormProps } from 'src/features/forms/types';
import { BaseCardProps, CardCategoryProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductFormValues extends Omit<BaseCardProps, 'children'>, CardCategoryProps, CardImageProps {}

export type ProductFormErrors = Record<keyof ProductFormValues, string>;
export type ProductFormTouched = Record<keyof ProductFormValues, boolean>;
export type ProductFormFileSelect = React.Dispatch<React.SetStateAction<File>>;

export type ProductFormProps = FormProps<ProductFormValues> & { onFileSelect: ProductFormFileSelect };
