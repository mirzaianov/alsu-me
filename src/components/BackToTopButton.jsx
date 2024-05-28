import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const heroSection = document.querySelector('#hero');
      const aboutSection = document.querySelector('#about');

      const heroHeight = heroSection.offsetHeight;
      const aboutHeight = aboutSection.offsetHeight;

      if (currentScroll < heroHeight + aboutHeight / 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="z-100 fixed bottom-[var(--m)] right-[var(--m)] flex aspect-square h-[var(--xl)] items-center justify-center rounded-full bg-gradient-to-r from-primary-30 to-primary-20 opacity-60">
      <a
        className="no-underline"
        href="#"
      >
        <PiArrowFatUpFill
          style={{ fontSize: 'var(--l)', color: 'hsla(0, 0%, 100%, 1)' }}
        />
      </a>
    </div>
  );
};

export default BackToTopButton;
