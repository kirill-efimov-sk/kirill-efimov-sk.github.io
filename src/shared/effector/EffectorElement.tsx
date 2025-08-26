import React, { FC } from 'react';
import cn from 'clsx';
import { EffectorElementData } from './Effector.types';
import s from './effector.module.scss';

interface EffectorElementProps {
  item: EffectorElementData;
  className?: string;
  onAnimationEnd: (id: string) => (e: React.AnimationEvent<HTMLDivElement>) => void;
}

export const EffectorElement: FC<EffectorElementProps> = ({ item, className, onAnimationEnd }) => {
  return (
    <div
      className={cn(s.elem, className)}
      onAnimationEnd={onAnimationEnd(item.id)}
      style={{ top: item.coords.y, left: item.coords.x }}
    >
      <div className={s.shifter}>{item.elem}</div>
    </div>
  );
};
