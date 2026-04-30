import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { clsx } from 'clsx';
import type { AnimationEventHandler, ReactNode } from 'react';
import styles from './mobile-menu.module.css';

const modalRoot = document.getElementById('mobile-menu');

if (!modalRoot) {
  throw new Error('Portal element #mobile-menu was not found.');
}

export type MenuState = 'closed' | 'open' | 'closing';

type MobileMenuProps = {
  children: ReactNode;
  isFixed?: boolean;
  menuState: MenuState;
  onAnimationEnd: AnimationEventHandler<HTMLDivElement>;
};

const MobileMenu = ({
  children,
  isFixed,
  menuState,
  onAnimationEnd,
}: MobileMenuProps) => {
  const [portalElement] = useState(() => document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(portalElement);

    return () => {
      modalRoot.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(
    <div
      onAnimationEnd={onAnimationEnd}
      className={clsx(
        styles.mobileMenu,
        styles[menuState],
        isFixed ? styles.fixed : styles.default,
      )}
    >
      <div className={styles.content}>{children}</div>
    </div>,
    portalElement,
  );
};

export default MobileMenu;
