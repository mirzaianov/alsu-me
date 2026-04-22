import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.getElementById('hamburger-dropdown');

const HamburgerDropdown = ({ children, isFixed, isDropdownOpen }) => {
  const [portalElement] = useState(() => document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(portalElement);

    return () => {
      modalRoot.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(
    <div
      className={`z-30 ${
        isDropdownOpen
          ? 'animate-dropdown-open opacity-100'
          : 'animate-dropdown-close opacity-0 delay-300'
      } shadow-primary fixed right-[var(--s)] rounded-[28px] bg-neutral-0/70 backdrop-blur-sm tablet:right-[var(--xl)] tablet:rounded-[36px] ${isFixed ? 'top-[90px] tablet:top-[120px]' : 'top-[64px] tablet:top-[104px]'}`}
    >
      <div className="flex h-fit w-fit items-center justify-center p-[var(--xl)]">
        {children}
      </div>
    </div>,
    portalElement,
  );
};

HamburgerDropdown.propTypes = {
  children: propTypes.node.isRequired,
  isDropdownOpen: propTypes.bool.isRequired,
  isFixed: propTypes.bool,
};

export default HamburgerDropdown;
