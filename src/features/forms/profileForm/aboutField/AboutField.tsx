import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/FormItem';
import { getValidates } from '../../../../utils/validation';
import { ProfileFormProps } from '../types';
import styles from './aboutField.module.scss';

export type AboutFieldProps = Pick<ProfileFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const AboutField = memo<AboutFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.ProfileForm.about.title')}
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          rows={4}
          maxLength={12}
          disabled={disabled}
          name="about"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t`forms.ProfileForm.about.placeholder`}
        />
      </FormItem>
    );
  }
);

AboutField.displayName = 'AboutField';
