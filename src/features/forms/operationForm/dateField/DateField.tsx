import React, { memo } from 'react';
import cn from 'clsx';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, Space } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/FormItem';
import { getValidates } from '../../../../utils/validation';
import { OperationFormProps } from '../types';
import styles from './dateField.module.scss';

export type DateFieldProps = Pick<OperationFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const DateField = memo<DateFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const handleChange = (date: Dayjs | null) => {
      const event = {
        target: {
          name: 'date',
          value: date ? date.format('YYYY-MM-DD') : '',
        },
      };
      onChange(event);
    };

    const handleBlur = () => {
      const event = {
        target: {
          name: 'date',
        },
      };
      onBlur(event);
    };

    const dateFormat = 'YYYY-MM-DD';
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.OperationForm.date.title')}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Space direction="vertical">
          <DatePicker
            disabled={disabled}
            data-cy="input-date"
            autoFocus
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={value ? dayjs(value, dateFormat) : null}
            maxDate={dayjs()}
            placeholder={t('forms.OperationForm.date.placeholder')}
            format={dateFormat}
            inputReadOnly={false}
            allowClear
          />
        </Space>
      </FormItem>
    );
  }
);

DateField.displayName = 'DateField';
