import { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import Logo from './Logo';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import Button from './Button';
import HamburgerDropdown from './HamburgerDropdown';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const LogoView = () => {
    if (windowWidth > 576) {
      return <Logo size="tablet" />;
    }

    // if (windowWidth > 576 && windowWidth <= 992) {
    //   return <Logo size="tablet" />;
    // }

    // if (windowWidth > 992) {
    //   return <Logo size="desktop" />;
    // }

    return <Logo />;
  };

  const MenuView = () => {
    if (windowWidth > 992) {
      return <NavBar type="inline" />;
    }

    return <NavBar />;
  };

  const HamburgerView = ({ onClick }) => {
    if (windowWidth > 992) {
      return (
        <Button
          text="Записаться"
          type="secondary"
          onClick={onClick}
        />
      );
    }

    return <Hamburger onClick={onClick} />;
  };

  return (
    <header
      id="header"
      className={`header mt-[var(--s)] flex w-full items-center justify-between px-[var(--s)] tablet:px-[var(--xl)] desktop:px-[var(--3xl)]`}
    >
      <LogoView />
      <MenuView />
      <HamburgerView onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
      {isDropdownOpen && (
        <HamburgerDropdown isOpen={isDropdownOpen}>
          <div ref={dropdownRef}>
            <NavBar
              type="block-3"
              setIsDropdownOpen={setIsDropdownOpen}
              isDropdownOpen={isDropdownOpen}
            />
          </div>
        </HamburgerDropdown>
      )}
    </header>
  );
};

Header.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
};

export default Header;
