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
  const [isFixed, setIsFixed] = useState(false);

  const dropdownRef = useRef();
  const buttonRef = useRef();

  useOnClickOutside(
    dropdownRef,
    () => {
      setIsDropdownOpen(false);
    },
    [buttonRef],
  );

  useEffect(() => {
    setIsDropdownOpen;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const stickyPoint = aboutSection.offsetTop - 145;

        setIsFixed(window.scrollY >= stickyPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('Header', isDropdownOpen);

  return (
    <header
      id="header"
      className={`relative z-10 mt-[var(--s)] flex w-full animate-header-fade-in justify-center tablet:px-[var(--xl)] desktop:px-[var(--3xl)] ${isFixed ? 'px-[var(--s)]' : ''}`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out ${isFixed ? 'fixed top-[var(--s)] w-11/12 rounded-full bg-neutral-0/70 px-[var(--m)] py-[var(--s)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm' : 'absolute w-full px-[var(--s)]'}`}
      >
        <LogoView windowWidth={windowWidth} />
        <MenuView windowWidth={windowWidth} />
        <div
          className="flex items-center justify-center"
          ref={buttonRef}
        >
          <HamburgerView
            setIsDropdownOpen={setIsDropdownOpen}
            isDropdownOpen={isDropdownOpen}
            windowWidth={windowWidth}
          />
        </div>
        <HamburgerDropdown
          isFixed={isFixed}
          isDropdownOpen={isDropdownOpen}
        >
          <div ref={dropdownRef}>
            <NavBar
              type="block-1"
              setIsDropdownOpen={setIsDropdownOpen}
              isDropdownOpen={isDropdownOpen}
            />
          </div>
        </HamburgerDropdown>
      </div>
    </header>
  );
};

const LogoView = (windowWidth) => {
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

const MenuView = (windowWidth) => {
  if (windowWidth > 992) {
    return <NavBar type="inline" />;
  }

  return <NavBar />;
};

const HamburgerView = ({ setIsDropdownOpen, isDropdownOpen, windowWidth }) => {
  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  if (windowWidth > 992) {
    return (
      <Button
        text="Записаться"
        type="secondary"
        onClick={handleClick}
      />
    );
  }

  return (
    <Hamburger
      onClick={handleClick}
      isDropdownOpen={isDropdownOpen}
    />
  );
};

Header.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
};

LogoView.propTypes = {
  windowWidth: propTypes.number,
};

MenuView.propTypes = {
  windowWidth: propTypes.number,
};

HamburgerView.propTypes = {
  setIsDropdownOpen: propTypes.func,
  isDropdownOpen: propTypes.bool,
  windowWidth: propTypes.number,
};

export default Header;
