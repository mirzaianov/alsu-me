import propTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('hamburger-dropdown');

const HamburgerDropdown = ({ children }) => {
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
      className={`z-1000 absolute right-[var(--2xl)] top-[var(--2xl)] animate-expand-from-corner`}
    >
      <div
        className={`bg-neutral-0 flex h-fit w-fit items-center justify-center rounded-[var(--s)] p-[var(--xl)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
      >
        {children}
      </div>
    </div>,
    elRef.current,
  );
};

HamburgerDropdown.propTypes = {
  children: propTypes.node.isRequired,
};

export default HamburgerDropdown;
