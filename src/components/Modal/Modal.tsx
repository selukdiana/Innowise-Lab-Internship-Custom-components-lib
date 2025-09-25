import React, { ReactNode, useEffect } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children = null,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return !open ? null : (
    <div className={styles.overlay} onClick={onClose} role="dialog">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
