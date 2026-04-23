import alsuLogo from '../assets/icons/alsu-logo.svg';
import styles from './BrandLogo.module.css';

const BrandLogo = () => {
  return (
    <a
      className={styles.brandLogo}
      aria-label="Go to the top of the page"
      href="#app"
    >
      <img
        className={styles.logo}
        src={alsuLogo}
        alt="BrandLogo"
      />
    </a>
  );
};

export default BrandLogo;
