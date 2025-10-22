import React, { memo } from 'react';
import cn from 'clsx';
import { InputNumber } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/formItem';
import { getValidates } from '../../../../utils/validation';
import { ProductFormProps } from '../types';
import styles from './priceField.module.scss';

export type PriceFieldProps = Pick<ProductFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: number;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const PriceField = memo<PriceFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const handleChange = (value: number | null) => {
      const event = {
        target: {
          name: 'price',
          value,
        },
      };
      onChange(event);
    };

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.ProductForm.price.title')}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <InputNumber
          disabled={disabled}
          data-cy="input-price"
          autoFocus
          name="price"
          onChange={handleChange}
          onBlur={onBlur}
          min={1}
          value={value}
          placeholder={t('forms.ProductForm.price.placeholder')}
          style={{ width: 150 }}
        />
      </FormItem>
    );
  }
);

PriceField.displayName = 'PriceField';
