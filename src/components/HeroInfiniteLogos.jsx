import HeroInfiniteLogosRow from './HeroInfiniteLogosRow';
import styles from './HeroInfiniteLogos.module.css';

const HeroInfiniteLogos = () => {
  return (
    <section
      id="infinite-logos"
      className={styles.root}
    >
      <HeroInfiniteLogosRow />
      <HeroInfiniteLogosRow />
    </section>
  );
};

export default HeroInfiniteLogos;
