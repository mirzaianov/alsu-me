import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlide, setIsSlide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infiniteLogosSection = document.getElementById('infinite-logos');
      const footerSection = document.getElementById('footer');

      if (infiniteLogosSection) {
        const stickyPoint = infiniteLogosSection.offsetTop;

        setIsVisible(window.scrollY >= stickyPoint);
      } else {
        setIsVisible(false);
      }

      if (footerSection) {
        const stickyPoint = footerSection.offsetTop - 900;

        setIsSlide(window.scrollY >= stickyPoint);
      } else {
        setIsSlide(false);
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
      ${isSlide ? '-translate-y-[200px] tablet:-translate-y-[286px]' : ''}
      fixed -bottom-[108px] right-[var(--s)] flex aspect-square items-center justify-center rounded-full bg-neutral-0/70 p-[var(--xs)] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-500 ease-in-out hover:bg-primary-10 hover:opacity-60 tablet:-bottom-[164px] tablet:right-[var(--xl)]`}
      href="#"
    >
      <PiArrowFatUpFill className="size-[var(--xl)] text-text-10 opacity-60 transition-colors duration-500 group-hover:animate-arrow-bounce group-hover:text-text-0 group-hover:opacity-100" />
    </a>
  );
};

export default BackToTopButton;
