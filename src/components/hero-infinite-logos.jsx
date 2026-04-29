import HeroInfiniteLogosRow from './hero-infinite-logos-row';
import styles from './hero-infinite-logos.module.css';

const HeroInfiniteLogos = () => {
  return (
    <section
      id="infinite-logos"
      className={styles.heroInfiniteLogos}
    >
      <HeroInfiniteLogosRow />
      <HeroInfiniteLogosRow />
    </section>
  );
};

export default HeroInfiniteLogos;
