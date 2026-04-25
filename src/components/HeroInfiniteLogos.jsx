import HeroInfiniteLogosRow from './HeroInfiniteLogosRow';
import styles from './HeroInfiniteLogos.module.css';

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
