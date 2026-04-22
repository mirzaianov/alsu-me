import propTypes from 'prop-types';
import styles from './HeroInfiniteLogo.module.css';

const HeroInfiniteLogo = ({ src, alt }) => {
  return (
    <img
      className={styles.root}
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
