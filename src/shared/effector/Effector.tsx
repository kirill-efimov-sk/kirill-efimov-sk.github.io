import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { EffectorElement } from './EffectorElement';
import { Coords, EffectorElementData } from './Effector.types';

export type EffectorRef = {
  show?: (elem: React.ReactNode, coords: Coords) => void;
};

export type EffectorProps = {
  className?: string;
  container?: HTMLElement;
};

export const Effector = forwardRef<EffectorRef, EffectorProps>(({ className, container = document.body }, ref) => {
  const [elements, setElements] = useState<Array<EffectorElementData>>([]);

  useImperativeHandle(ref, () => ({
    show: (elem: React.ReactNode, coords: Coords) => {
      setElements((prev) => [...prev, { id: Math.random().toString(36).slice(2, 18), elem, coords }]);
    },
  }));

  const onAnimationEnd = (id: string) => (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setElements((v) => v.filter((i) => i.id !== id));
  };

  return createPortal(
    elements.map((item) => (
      <EffectorElement item={item} className={className} onAnimationEnd={onAnimationEnd} key={item.id} />
    )),
    container
  );
});

Effector.displayName = 'Effector';
