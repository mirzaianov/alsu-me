import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const stickyPoint = aboutSection.offsetTop - 145;

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
      className={`z-100 group
      ${isVisible ? '-translate-y-[124px] tablet:-translate-y-[196px]' : ''}
      fixed -bottom-[108px] right-[var(--s)] flex aspect-square items-center justify-center rounded-full bg-neutral-0/70 p-[var(--xs)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-500 hover:bg-primary-10 hover:opacity-60 tablet:-bottom-[164px] tablet:right-[var(--xl)]`}
      href="#"
    >
      <PiArrowFatUpFill className="size-[var(--xl)] text-text-10 opacity-60 transition-colors duration-500 group-hover:animate-arrow-bounce group-hover:text-text-0 group-hover:opacity-100" />
    </a>
  );
};

export default BackToTopButton;
