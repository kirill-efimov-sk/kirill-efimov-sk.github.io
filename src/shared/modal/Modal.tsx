import React, { FC } from 'react';
import styles from './modal.module.scss';
import { createPortal } from 'react-dom';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, onClose, children }): React.JSX.Element => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!visible) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleBackgroundClick} role="dialog">
      <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={onClose} aria-label="Закрыть модальное окно">
          ×
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};
