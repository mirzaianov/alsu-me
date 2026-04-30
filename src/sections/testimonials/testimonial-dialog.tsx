import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useClickAway } from '@uidotdev/usehooks';
import type { ReactNode } from 'react';
import Button from '../../shared/ui/button/button';
import styles from './testimonial-dialog.module.css';

const modalRoot = document.getElementById('testimonial-dialog');

if (!modalRoot) {
  throw new Error('Portal element #testimonial-dialog was not found.');
}

type TestimonialDialogProps = {
  onClose: () => void;
  children: ReactNode;
};

const TestimonialDialog = ({ onClose, children }: TestimonialDialogProps) => {
  const [portalElement] = useState(() => document.createElement('div'));
  const closeRef = useClickAway<HTMLDivElement>(() => onClose());

  useEffect(() => {
    modalRoot.appendChild(portalElement);

    return () => {
      modalRoot.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div
        ref={closeRef}
        className={styles.panel}
      >
        {children}
        <div className={styles.action}>
          <Button
            ariaLabel="Закрыть"
            type="accent"
            onClick={onClose}
          >
            <span>Закрыть</span>
          </Button>
        </div>
      </div>
    </div>,
    portalElement,
  );
};

export default TestimonialDialog;
