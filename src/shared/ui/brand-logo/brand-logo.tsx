import Image from 'next/image';
import alsuLogo from '../../../assets/icons/alsu-logo.svg';
import { commonUiContent } from '../../../content/ru/common';
import styles from './brand-logo.module.css';

const BrandLogo = () => {
  return (
    <a
      className={styles.brandLogo}
      aria-label={commonUiContent.brandLogo.ariaLabel}
      href="#app"
    >
      <Image
        className={styles.logo}
        src={alsuLogo}
        alt={commonUiContent.brandLogo.alt}
        unoptimized
      />
    </a>
  );
};

export default BrandLogo;
