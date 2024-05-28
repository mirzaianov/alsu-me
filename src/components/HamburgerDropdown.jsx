import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.getElementById('hamburger-dropdown');

const HamburgerDropdown = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);

  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const stickyPoint = aboutSection.offsetTop;

        setIsFixed(window.scrollY >= stickyPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentEl = elRef.current;

    modalRoot.appendChild(currentEl);

    return () => {
      modalRoot.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`z-1000 fixed right-[var(--s)] top-[104px] animate-expand-from-corner rounded-[var(--xl)] bg-neutral-0/90 shadow-xl backdrop-blur-sm`}
    >
      <div
        className={`flex h-fit w-fit items-center justify-center p-[var(--xl)]`}
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
