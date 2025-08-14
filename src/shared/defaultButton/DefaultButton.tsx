import React, { FC } from 'react';
import styles from './defaultButton.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClasses?: string;
}

//Используется деструктуризация пропсов
export const DefaultButton: FC<ButtonProps> = ({ buttonClasses, children, ...props }) => {
  return (
    <button className={`${styles.button} ${buttonClasses}`} {...props}>
      {children}
    </button>
  );
};
