import React, { FC } from 'react';
import { Button } from '../../../../shared/defaultButton';
import styles from './counterInput.module.scss';

export interface CounterInputProps {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterInput: FC<CounterInputProps> = ({ value, onChange }) => {
  const handleIncrement = () => onChange((prev) => prev + 1);
  const handleDecrement = () => onChange((prev) => (prev > 0 ? prev - 1 : 0));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      onChange(value);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <Button onClick={handleIncrement} title="Уменьшить количество">
        +
      </Button>
      <input
        name="counterInput"
        type="number"
        value={value}
        onChange={handleInputChange}
        aria-label="Количество товаров"
        min="0"
        className={styles.counterInput}
      />
      <Button onClick={handleDecrement} title="Увеличить количество">
        -
      </Button>
    </div>
  );
};
