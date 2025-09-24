import { FormProps } from 'src/features/forms/types';
import { BaseCardProps, CardCategoryProps, BaseCardDateProps } from 'src/shared/card/card.types';

export interface OperationFormValues extends Omit<BaseCardProps, 'children'>, CardCategoryProps, BaseCardDateProps {}

export type OperationFormErrors = Record<keyof OperationFormValues, string>;
export type OperationFormTouched = Record<keyof OperationFormValues, boolean>;

export type OperationFormProps = FormProps<OperationFormValues>;
