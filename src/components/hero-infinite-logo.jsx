import propTypes from 'prop-types';
import styles from './hero-infinite-logo.module.css';

const HeroInfiniteLogo = ({ src, alt }) => {
  return (
    <img
      className={styles.heroInfiniteLogo}
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
