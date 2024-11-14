import { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import BrandLogo from './BrandLogo';
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

  useOnClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  }, [buttonRef]);

  const closeOnEscape = (e) => {
    if (e.code === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.addEventListener('keydown', closeOnEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
    };
  }, [isDropdownOpen]);

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

  useEffect(() => {
    if (width >= 1061) {
      setIsDropdownOpen(false);
    }
  }, [width]);

  return (
    <header
      id="header"
      className="relative z-30 mt-[var(--s)] flex w-full animate-header-fade-in justify-center px-[var(--s)] tablet:mt-[var(--xl)] desktop:max-w-[var(--l-end)]"
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          isFixed
            ? 'shadow-primary fixed top-[var(--s)] w-11/12 rounded-full bg-neutral-0/70 px-[var(--m)] py-[var(--xs)] backdrop-blur-sm tablet:top-[var(--m)] tablet:w-11/12 tablet:py-[var(--s)] desktop:max-w-[1440px]'
            : 'absolute w-full px-[var(--s)] tablet:px-[var(--xl)] desktop:px-[var(--3xl)]'
        }`}
      >
        <div className="-mt-1 flex items-center justify-center tablet:ml-2">
          <BrandLogo />
        </div>
        <div className="flex w-fit grow items-center justify-center">
          {width < 1061 ? '' : <NavBar type="inline" />}
        </div>
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
              ariaLabel="Записаться"
              type="secondary"
              link="https://t.me/sue_onlineenglish"
            >
              <span>Записаться</span>
            </Button>
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
