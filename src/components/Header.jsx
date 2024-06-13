import { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import Logo from './Logo';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import Button from './Button';
import HamburgerDropdown from './HamburgerDropdown';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Header = ({ width }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    const handleScroll = () => {
      const infiniteLogosSection = document.getElementById('infinite-logos');

      if (infiniteLogosSection) {
        const stickyPoint = infiniteLogosSection.offsetTop;

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
      className="relative z-10 mt-[var(--s)] flex w-full animate-header-fade-in justify-center
      px-[var(--s)]
                  tablet:mt-[var(--xl)]
                  desktop:max-w-[var(--l-end)]"
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out
        ${
          isFixed
            ? 'fixed top-[var(--s)] w-11/12 rounded-full bg-neutral-0/70 px-[var(--m)] py-[var(--s)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm tablet:top-[var(--m)] tablet:w-11/12 desktop:max-w-[var(--l-end)]'
            : 'absolute w-full px-[var(--s)] tablet:px-[var(--xl)] desktop:px-[var(--3xl)]'
        }`}
      >
        <div className="-mt-1 flex items-center justify-center tablet:ml-2">
          <Logo />
        </div>
        {width < 1061 ? <NavBar /> : <NavBar type="inline" />}
        <div
          className="flex items-center justify-center tablet:mr-2"
          ref={buttonRef}
        >
          {width < 1061 ? (
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
        {width < 1061 && (
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
  width: propTypes.number.isRequired,
};

export default Header;
