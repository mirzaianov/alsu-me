import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Logo from './Logo';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import Button from './Button';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const HamburgerView = () => {
    if (windowWidth > 992) {
      return (
        <Button
          text="Записаться"
          type="secondary"
          onClick={() => {}}
        />
      );
    }

    return <Hamburger />;
  };

  return (
    <header
      id="header"
      className={`header mt-[var(--s)] flex w-full items-center justify-between px-[var(--s)] tablet:px-[var(--xl)] desktop:px-[var(--3xl)]`}
    >
      <LogoView />
      <MenuView />
      <HamburgerView />
    </header>
  );
};

Header.propTypes = {
  type: propTypes.string,
};

export default Header;
