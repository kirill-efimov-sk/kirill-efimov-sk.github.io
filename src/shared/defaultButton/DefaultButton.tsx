import React, { FC } from 'react';
import styles from './defaultButton.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClasses?: string;
}

export const Button: FC<ButtonProps> = ({ disabled = false, buttonClasses, children, ...props }) => {
  return (
    <button className={`${styles.button} ${buttonClasses}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
