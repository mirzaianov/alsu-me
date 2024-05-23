import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const modalRoot = document.getElementById('testimonail-card-modal');

const TestimonialCardModal = ({ onClose, children }) => {
  const elRef = useRef(null);

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
    <div
      className={`z-1000 fixed inset-0 flex items-center justify-center bg-slate-600/[.9]`}
    >
      <div
        className={`bg-neutral-0 flex w-[var(--card-width)] min-w-[var(--card-width)] flex-col justify-start gap-[var(--m)] rounded-[var(--s)] p-[var(--m)] text-body-tight shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
      >
        {children}
        <div className={`self-end`}>
          <Button
            text="Закрыть"
            type="accent"
            onClick={onClose}
          />
        </div>
      </div>
    </div>,
    elRef.current,
  );
};

export default TestimonialCardModal;
