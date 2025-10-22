import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/formItem';
import { getValidates } from '../../../../utils/validation';
import { ProfileFormProps } from '../types';
import styles from './nameField.module.scss';

export type NameFieldProps = Pick<ProfileFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const NameField = memo<NameFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t('forms.ProfileForm.name.title')}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t('forms.ProfileForm.name.placeholder')}
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
