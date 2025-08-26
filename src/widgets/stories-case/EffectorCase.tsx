import React, { FC, useEffect, useRef, useState } from 'react';
import { Effector, EffectorRef } from '../../shared/effector/Effector';
import { EffectorButton } from '../../shared/effector/EffectorButton';
import { ComponentInfo } from '../../features/componentInfo';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { generateTargetFontSize } from '../../utils/generateTargetFontSize';
import { phrases } from './effector-phrases';

export const Wrapper: FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [fontSize, setFontSize] = useState(24);
  const effector = useRef<EffectorRef>();
  const elementRef = useRef<HTMLDivElement>(null);

  const { disconnectResizeObserver } = useResizeObserver(elementRef, (entry) => {
    const { width } = entry.contentRect;
    const fontSize = generateTargetFontSize(width);

    setFontSize(fontSize);
  });

  useEffect(() => {
    return disconnectResizeObserver;
  }, [disconnectResizeObserver]);

  //извне управляем размером шрифта, передавая компонент ноду в Effector
  const handleShowElement = (e: React.MouseEvent, content: React.ReactNode) => {
    effector.current?.show(<div style={{ userSelect: 'none', fontSize: `${fontSize}px` }}>{content}</div>, {
      x: e.clientX + 15,
      y: e.clientY - 15,
    });
    setClickCount((prev) => prev + 1);
  };

  return (
    <div ref={elementRef}>
      <ComponentInfo
        title="Эффектор"
        desc={`Это компонент Effector. Создает множество порталов, которые анимированно исчезают и размонтируются`}
      >
        <Effector ref={effector} />
        <EffectorButton handleClick={(e) => handleShowElement(e, clickCount)}>Нажми на меня</EffectorButton>
        <EffectorButton handleClick={(e) => handleShowElement(e, clickCount)}>И на меня</EffectorButton>
        <EffectorButton handleClick={(e) => handleShowElement(e, phrases[clickCount % phrases.length])}>
          И на меня не забудь
        </EffectorButton>
      </ComponentInfo>
    </div>
  );
};
