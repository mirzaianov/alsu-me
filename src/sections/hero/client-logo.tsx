import Image, { type StaticImageData } from 'next/image';
import styles from './client-logo.module.css';

type ClientLogoProps = {
  src: StaticImageData | string;
  alt: string;
};

const ClientLogo = ({ src, alt }: ClientLogoProps) => {
  return (
    <Image
      className={styles.heroInfiniteLogo}
      src={src}
      alt={alt}
      unoptimized
    />
  );
};

export default ClientLogo;
