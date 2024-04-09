import propTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import KamazLogo from '../assets/icons/kamaz-logo.svg';
import KnorrLogo from '../assets/icons/knorr-logo.svg';
import TempoLogo from '../assets/icons/tempo-logo.svg';

const CarouselSet = ({ isDataAnimated }) => {
  return (
    <ul
      className={`
        tag-list
        scroller__inner
        flex
        flex-wrap
        gap-[var(--s)]
        py-[var(--s)]
        ${isDataAnimated ? 'animate-scrolling w-fit flex-nowrap' : ''}
      `}
    >
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
      <CarouselItem
        src={KamazLogo}
        alt="Kamaz Logo"
      />
    </ul>
  );
};

CarouselSet.propTypes = {
  isDataAnimated: propTypes.bool.isRequired,
};

export default CarouselSet;
