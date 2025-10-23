import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/FormItem';
import { getValidates } from '../../../../utils/validation';
import { ProductFormProps } from '../types';
import styles from './descriptionField.module.scss';

export type DescriptionFieldProps = Pick<ProductFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const DescriptionField = memo<DescriptionFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.ProductForm.description.title')}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input-description"
          autoFocus
          name="description"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t('forms.ProductForm.description.placeholder')}
          maxLength={200}
        />
      </FormItem>
    );
  }
);

DescriptionField.displayName = 'DescriptionField';
