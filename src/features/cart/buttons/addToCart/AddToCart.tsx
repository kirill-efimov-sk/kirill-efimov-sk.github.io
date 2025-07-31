import React, { FC, useMemo, useState } from 'react';
import { CounterInput } from '../../ui/counterInput';
import { Button } from '../../../../shared/defaultButton';

export interface AddToCartProps {
  count?: number;
}

export const AddToCart: FC<AddToCartProps> = ({ count = 0 }) => {
  const [counter, setCounter] = useState(count);

  useMemo(() => {
    setCounter((prev) => (prev !== count ? count : prev));
  }, [count]);

  if (counter > 0) {
    return <CounterInput value={counter} onChange={setCounter} />;
  }
  return (
    <Button onClick={() => setCounter(1)} title="Добавление в корзину" disabled={true}>
      В корзину
    </Button>
  );
};
