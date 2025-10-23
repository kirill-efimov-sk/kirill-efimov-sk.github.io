import React, { memo } from 'react';
import cn from 'clsx';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist';
import { LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { AuthFormProps } from '../types';
import { FormItem } from '../../../../shared/formItem';
import { getValidates } from '../../../../utils/validation';
import styles from './passwordField.module.scss';

export type PasswordFieldProps = Pick<AuthFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  repeat?: boolean;
  name: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const PasswordField = memo<PasswordFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    onPressEnter,
    touched,
    value,
    repeat = false,
    name = 'password',
    errors,
    disabled,
    submitCount,
  }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t(repeat ? `forms.AuthForm.repeatPassword.title` : `forms.AuthForm.password.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.Password
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy={`input-${name}`}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(repeat ? `forms.AuthForm.repeatPassword.placeholder` : `forms.AuthForm.password.placeholder`)}
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
