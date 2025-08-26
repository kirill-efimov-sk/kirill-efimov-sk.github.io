import React, { FC } from 'react';
import s from './effector.module.scss';

interface EffectorButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

export const EffectorButton: FC<EffectorButtonProps> = ({ handleClick, children }) => {
  return (
    <div className={s.buttonContainer}>
      <button onClick={(e) => handleClick(e)}>{children}</button>
    </div>
  );
};
