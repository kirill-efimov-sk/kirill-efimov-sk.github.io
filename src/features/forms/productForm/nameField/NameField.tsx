import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/FormItem';
import { getValidates } from '../../../../utils/validation';
import { ProductFormProps } from '../types';
import styles from './nameField.module.scss';

export type NameFieldProps = Pick<ProductFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const NameField = memo<NameFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.ProductForm.name.title')}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          data-cy="input-name"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t('forms.ProductForm.name.placeholder')}
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
