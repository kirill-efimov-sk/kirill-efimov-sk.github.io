import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import styles from './modal.module.scss';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, onClose, children }): React.JSX.Element => {
  const { t } = useTranslation();
  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Срабатывает при начале клика или тапа
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  if (!visible) return null;

  return createPortal(
    <div
      className={styles.modalOverlay}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onClick={handleBackgroundClick}
      role="dialog"
    >
      <div className={styles.modalContainer}>
        <button
          className={styles.modalCloseButton}
          onClick={onClose}
          title={t('modal.close')}
          aria-label={t('modal.label')}
        >
          ×
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};
