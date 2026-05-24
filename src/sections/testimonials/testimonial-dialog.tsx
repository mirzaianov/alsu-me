'use client';

import { Dialog } from '@base-ui/react/dialog';
import type { ReactNode } from 'react';
import styles from './testimonial-dialog.module.css';

type TestimonialDialogProps = {
  children: ReactNode;
  title: string;
};

const TestimonialDialog = ({ children, title }: TestimonialDialogProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className={styles.backdrop} />
      <Dialog.Viewport className={styles.viewport}>
        <Dialog.Popup className={styles.panel}>
          <Dialog.Title className="srOnly">{title}</Dialog.Title>
          <div className={styles.content}>{children}</div>
          <div className={styles.action}>
            <Dialog.Close className={styles.close}>Закрыть</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Viewport>
    </Dialog.Portal>
  );
};

export default TestimonialDialog;
