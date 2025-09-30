import React, { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
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

  return !open
    ? null
    : createPortal(
        <div className={styles.overlay} onClick={onClose} role="dialog">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.content}>{children}</div>
          </div>
        </div>,
        document.body,
      );
};
