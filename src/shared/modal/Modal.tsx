import React, { FC } from 'react';
import styles from './modal.module.scss';

export interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, children }): React.JSX.Element => {
  return (
    visible && (
      <div className={`${styles.modalOverlay} ${visible ? styles.visible : ''}`}>
        <div className={styles.modalContainer}>
          <button className={styles.modalCloseButton}>×</button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    )
  );
};
