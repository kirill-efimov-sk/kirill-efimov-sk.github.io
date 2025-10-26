import React, { FC, useState } from 'react';
import { DefaultButton } from 'src/shared/defaultButton';
import { Modal } from 'src/shared/modal/Modal';
import styles from './overScreen.module.scss';

export const OverScreen: FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.root}>
      <DefaultButton onClick={() => setModalVisible(true)}>Открыть модальное окно</DefaultButton>
      <Modal visible={isModalVisible} onClose={handleCloseModal}>
        <p>Содержимое модального окна</p>
      </Modal>
    </div>
  );
};
