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
      className={`
        relative
        z-10
        mt-[var(--s)]
        flex
        w-full
        justify-center
        tablet:px-[var(--xl)]
        desktop:px-[var(--3xl)]
        ${isFixed ? 'px-[var(--s)]' : ''}`}
    >
      <div
        className={`
          flex
          items-center
          justify-between
          transition-all duration-500 ease-in-out
          ${isFixed ? 'fixed top-[var(--s)] w-11/12 rounded-full bg-neutral-0/50 px-[var(--l)] py-[var(--s)] shadow-xl backdrop-blur-sm' : 'absolute w-full px-[var(--s)]'}`}
      >
        <LogoView />
        <MenuView />
        <HamburgerView onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
        {isDropdownOpen && (
          <HamburgerDropdown isFixed={isFixed}>
            <div ref={dropdownRef}>
              <NavBar
                type="block-3"
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
