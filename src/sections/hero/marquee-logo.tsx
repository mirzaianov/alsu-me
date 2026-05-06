import Image, { type StaticImageData } from 'next/image';
import styles from './marquee-logo.module.css';

type MarqueeLogoProps = {
  src: StaticImageData | string;
  alt: string;
};

const MarqueeLogo = ({ src, alt }: MarqueeLogoProps) => {
  return (
    <Image
      className={styles.heroInfiniteLogo}
      src={src}
      alt={alt}
      unoptimized
    />
  );
};

export default MarqueeLogo;
