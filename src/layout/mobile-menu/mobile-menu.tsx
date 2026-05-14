'use client';

import { Dialog } from '@base-ui/react/dialog';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './mobile-menu.module.css';

type MobileMenuProps = {
  children: ReactNode;
  isFixed?: boolean;
};

const MobileMenu = ({ children, isFixed }: MobileMenuProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className={styles.backdrop} />
      <Dialog.Popup
        className={clsx(
          styles.mobileMenu,
          isFixed ? styles.fixed : styles.default,
        )}
      >
        <Dialog.Title className="srOnly">Site navigation</Dialog.Title>
        <div className={styles.content}>{children}</div>
        <Dialog.Close className="srOnly">Close mobile menu</Dialog.Close>
      </Dialog.Popup>
    </Dialog.Portal>
  );
};

export default MobileMenu;
