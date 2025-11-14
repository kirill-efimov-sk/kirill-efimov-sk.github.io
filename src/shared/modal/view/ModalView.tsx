import React, { FC, useState } from 'react';
import { Modal } from 'src/shared/modal/Modal';

interface ModalViewProps {
  children: React.ReactNode;
}

export const ModalView: FC<ModalViewProps> = ({ children }) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal visible={isModalVisible} onClose={handleCloseModal}>
      {children}
    </Modal>
  );
};
