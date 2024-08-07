import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';

const BackToTopButton = ({ width }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infiniteLogosSection =
        document.getElementById('infinite-logos').offsetTop;
      const footerSection = document.getElementById('footer').offsetTop - 1000;

      if (
        window.scrollY >= infiniteLogosSection &&
        window.scrollY <= footerSection
      ) {
        setIsVisible(true);
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
      aria-label="Go to the top of the page"
      className={`group z-30 ${isVisible ? '-translate-y-[124px] tablet:-translate-y-[196px]' : ''} shadow-primary fixed -bottom-[108px] right-[var(--s)] flex aspect-square items-center justify-center rounded-full bg-neutral-0/70 p-[var(--xs)] backdrop-blur-sm transition-all duration-500 ease-in-out hover:bg-primary-10 hover:opacity-60 tablet:-bottom-[164px] tablet:right-[var(--xl)] ${width < 1761 ? '' : 'tablet:left-[calc(50%+760px)] tablet:right-auto'}`}
      href="#"
    >
      <PiArrowFatUpFill className="size-[var(--xl)] text-text-10 opacity-60 transition-colors duration-500 group-hover:animate-arrow-bounce group-hover:text-text-0 group-hover:opacity-100" />
    </a>
  );
};

BackToTopButton.propTypes = {
  width: propTypes.number.isRequired,
};

export default BackToTopButton;
