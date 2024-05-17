import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('testimonail-card-modal');

const Modal = ({ onClose, children }) => {
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
      <div className={`radius-[5px] bg-[var(--neutral-00)] p-[20px]`}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    elRef.current,
  );
};

export default Modal;
