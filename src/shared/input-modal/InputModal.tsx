import React, { FC, useState } from 'react';
import { Button } from '../defaultButton';
import { Modal } from '../modal';
import styles from './inputModal.module.scss';

export const InputModal: FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Введите текст..."
        value={inputValue}
        onChange={handleInputChange}
        aria-label="Текст для добавления в модальное окно"
        className={styles.input}
      />
      <Button onClick={() => setModalVisible(true)}>Открыть модальное окно</Button>
      <Modal visible={isModalVisible}>
        <p>{inputValue}</p>
      </Modal>
    </div>
  );
};
