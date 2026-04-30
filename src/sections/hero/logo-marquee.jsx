import LogoMarqueeRow from './logo-marquee-row';
import styles from './logo-marquee.module.css';

const LogoMarquee = () => {
  return (
    <section
      id="infinite-logos"
      className={styles.heroInfiniteLogos}
    >
      <LogoMarqueeRow />
      <LogoMarqueeRow />
    </section>
  );
};

export default LogoMarquee;
