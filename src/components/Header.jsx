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

  return (
    <header
      id="header"
      className="relative z-10 mt-[var(--s)] flex w-full animate-header-fade-in justify-center tablet:mt-[var(--xl)] desktop:max-w-[var(--l-end)]"
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out tablet:px-[var(--xl)] desktop:px-[var(--3xl)]
        ${
          isFixed
            ? 'fixed top-[var(--s)] w-11/12 rounded-full bg-neutral-0/70 px-[var(--m)] py-[var(--s)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm tablet:top-[var(--xl)] tablet:py-[var(--m)]'
            : 'absolute w-full px-[var(--s)]'
        }`}
      >
        <Logo />
        {windowWidth < 1060 ? <NavBar /> : <NavBar type="inline" />}
        <div
          className="flex items-center justify-center"
          ref={buttonRef}
        >
          {windowWidth < 1060 ? (
            <Hamburger
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              isDropdownOpen={isDropdownOpen}
            />
          ) : (
            <Button
              text="Записаться"
              type="secondary"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            />
          )}
        </div>
        {windowWidth < 1060 && (
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
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
};

export default Header;
