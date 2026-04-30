import propTypes from 'prop-types';
import styles from './marquee-logo.module.css';

const MarqueeLogo = ({ src, alt }) => {
  return (
    <img
      className={styles.heroInfiniteLogo}
      src={src}
      alt={alt}
    />
  );
};

MarqueeLogo.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default MarqueeLogo;
