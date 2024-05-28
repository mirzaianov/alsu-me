import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const stickyPoint = aboutSection.offsetTop;

        setIsVisible(window.scrollY >= stickyPoint);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-100 ${isVisible ? '-translate-y-[124px] opacity-60' : 'opacity-0'} fixed -bottom-[108px] right-[var(--s)] flex aspect-square h-[var(--2xl)] items-center justify-center rounded-full bg-gradient-to-br from-primary-30 via-primary-20 to-primary-10 transition-all duration-500`}
    >
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
