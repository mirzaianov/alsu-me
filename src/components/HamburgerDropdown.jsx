import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.getElementById('hamburger-dropdown');

const HamburgerDropdown = ({ children, isFixed }) => {
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
      className={`z-1000 fixed right-[var(--s)] animate-expand-from-corner rounded-[var(--xl)] bg-neutral-0/70 shadow-xl backdrop-blur-sm ${isFixed ? 'top-[104px]' : 'top-[64px]'}`}
    >
      <div className="flex h-fit w-fit items-center justify-center p-[var(--xl)]">
        {children}
      </div>
    </div>,
    elRef.current,
  );
};

HamburgerDropdown.propTypes = {
  children: propTypes.node.isRequired,
  isFixed: propTypes.bool,
};

export default HamburgerDropdown;
