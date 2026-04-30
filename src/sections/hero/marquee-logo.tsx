import styles from './marquee-logo.module.css';

type MarqueeLogoProps = {
  src: string;
  alt: string;
};

const MarqueeLogo = ({ src, alt }: MarqueeLogoProps) => {
  return (
    <img
      className={styles.heroInfiniteLogo}
      src={src}
      alt={alt}
    />
  );
};

export default MarqueeLogo;
