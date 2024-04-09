import propTypes from 'prop-types';

const CarouselItem = ({ alt }) => {
  return (
    <li
      className={`
        carousel__item
        whitespace-nowrap
        bg-[var(--primary-40)]
        px-[var(--xs)]
      `}
    >
      {/* <img
        className={`
          carousel__image
          min-h-[var(--m)]
        `}
        src={src}
        alt={alt}
      /> */}
      {alt}
    </li>
  );
};

CarouselItem.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default CarouselItem;
