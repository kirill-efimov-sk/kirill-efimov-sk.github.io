import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { AuthFormProps } from '../types';
import { FormItem } from '../../../../shared/FormItem';
import { getValidates } from '../../../../utils/validation';
import styles from './usernameField.module.scss';

export type UsernameFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onPressEnter: () => void;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const UsernameField = memo<UsernameFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(styles.root, className)}
        title={t(`forms.AuthForm.username.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          data-cy="input-username"
          autoFocus
          type="email"
          name="username"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.AuthForm.username.placeholder`)}
        />
      </FormItem>
    );
  }
);

UsernameField.displayName = 'UsernameField';
