import Image from 'next/image';
import alsuLogo from '../../../assets/icons/alsu-logo.svg';
import styles from './brand-logo.module.css';

const BrandLogo = () => {
  return (
    <a
      className={styles.brandLogo}
      aria-label="Go to the top of the page"
      href="#app"
    >
      <Image
        className={styles.logo}
        src={alsuLogo}
        alt="BrandLogo"
        unoptimized
      />
    </a>
  );
};

export default BrandLogo;
