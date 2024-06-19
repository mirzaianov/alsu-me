import propTypes from 'prop-types';

const HeroInfiniteLogo = ({ src, alt }) => {
  return (
    <img
      className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
      src={src}
      alt={alt}
    />
  );
};

HeroInfiniteLogo.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default HeroInfiniteLogo;
