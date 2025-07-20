import React, { FC } from 'react';
import styles from './defaultButton.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  buttonClasses?: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  disabled = false,
  loading = false,
  onClick,
  buttonClasses,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${buttonClasses}`}
      title={title}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  );
};
