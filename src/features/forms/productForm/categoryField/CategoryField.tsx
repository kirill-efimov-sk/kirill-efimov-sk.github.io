import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/formItem';
import { getValidates } from '../../../../utils/validation';
import { ProductFormProps } from '../types';
import styles from './categoryField.module.scss';

export type CategoryFieldProps = Pick<ProductFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const CategoryField = memo<CategoryFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.ProductForm.category.title')}
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input-category"
          autoFocus
          name="category"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t('forms.ProductForm.category.placeholder')}
        />
      </FormItem>
    );
  }
);

CategoryField.displayName = 'CategoryField';
