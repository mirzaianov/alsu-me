import propTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useClickAway } from '@uidotdev/usehooks';
import Button from './Button';

const modalRoot = document.getElementById('testimonail-card-modal');

const TestimonialCardModal = ({ onClose, children }) => {
  const elRef = useRef(null);
  const closeRef = useClickAway(() => onClose());

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const currentEl = elRef.current;

    modalRoot.appendChild(currentEl);

    return () => {
      modalRoot.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex animate-modal-bg-open items-center justify-center bg-neutral-90/50">
      <div
        ref={closeRef}
        className={`shadow-primary flex max-h-[calc(100svh-2*var(--s))] max-w-[calc(100vw-2*var(--m))] animate-modal-open flex-col justify-start gap-[var(--m)] overflow-y-auto rounded-[var(--s)] bg-neutral-0 p-[var(--m)] text-body-tight tablet:max-w-[51ch]`}
      >
        {children}
        <div className="self-end">
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
    elRef.current,
  );
};

TestimonialCardModal.propTypes = {
  onClose: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

export default TestimonialCardModal;
