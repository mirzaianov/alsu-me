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
    <a
      className={`z-100 group ${isVisible ? '-translate-y-[124px]' : ''} fixed -bottom-[108px] right-[var(--s)] flex aspect-square items-center justify-center rounded-full bg-neutral-0/50 p-[var(--xs)] shadow-xl backdrop-blur-sm transition-colors duration-500 hover:bg-primary-10 hover:opacity-60`}
      href="#"
    >
      <PiArrowFatUpFill className="group-hover:animate-arrow-bounce size-[var(--xl)] text-text-10 opacity-60 transition-colors duration-500 group-hover:text-text-0 group-hover:opacity-100" />
    </a>
  );
};

export default BackToTopButton;
