import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useClickAway } from '@uidotdev/usehooks';
import Button from './Button';
import styles from './TestimonialCardModal.module.css';

const modalRoot = document.getElementById('testimonial-card-modal');

const TestimonialCardModal = ({ onClose, children }) => {
  const [portalElement] = useState(() => document.createElement('div'));
  const closeRef = useClickAway(() => onClose());

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

TestimonialCardModal.propTypes = {
  onClose: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

export default TestimonialCardModal;
