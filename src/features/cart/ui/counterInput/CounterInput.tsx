import React, { FC } from 'react';
import { DefaultButton } from '../../../../shared/defaultButton';
import styles from './counterInput.module.scss';

export interface CounterInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const CounterInput: FC<CounterInputProps> = ({ value, onChange }) => {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => onChange(value > 0 ? value - 1 : 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.counterContainer}>
      <DefaultButton onClick={handleIncrement} title="Уменьшить количество">
        +
      </DefaultButton>
      <input
        name="counterInput"
        type="number"
        value={value}
        onChange={handleInputChange}
        aria-label="Количество товаров"
        min="0"
        className={styles.counterInput}
      />
      <DefaultButton onClick={handleDecrement} title="Увеличить количество">
        -
      </DefaultButton>
    </div>
  );
};
