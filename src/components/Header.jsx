import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Logo from './Logo';
import Navbar from './Navbar';
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
      return <Navbar type="inline" />;
    }

    return <Navbar />;
  };

  const HamburgerView = () => {
    if (windowWidth > 992) {
      return (
        <Button
          text="Записаться"
          type="secondary"
        />
      );
    }

    return <Hamburger />;
  };

  return (
    <header className={`flex items-center justify-between`}>
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
