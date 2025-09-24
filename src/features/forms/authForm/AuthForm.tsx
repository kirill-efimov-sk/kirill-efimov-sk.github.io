import React, { memo } from 'react';
import cn from 'clsx';
import { AuthFormProps } from './types';
import { UsernameField } from './usernameField';
import { PasswordField } from './passwordField';
import style from './authForm.module.scss';

export const AuthForm = memo<AuthFormProps>(
  ({ className, repeatPassword, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(style.root, className)}>
        <UsernameField
          onPressEnter={submitForm}
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.username}
          errors={errors.username}
          submitCount={submitCount}
          touched={touched.username}
          disabled={disabled}
        />
        <PasswordField
          name="password"
          onPressEnter={submitForm}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          errors={errors.password}
          submitCount={submitCount}
          touched={touched.password}
          disabled={disabled}
        />
        {repeatPassword && (
          <PasswordField
            name="repeatPassword"
            onPressEnter={submitForm}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.repeatPassword}
            errors={errors.repeatPassword}
            submitCount={submitCount}
            touched={touched.repeatPassword}
            disabled={disabled}
            repeat={repeatPassword}
          />
        )}
      </form>
    );
  }
);

AuthForm.displayName = 'AuthForm';
