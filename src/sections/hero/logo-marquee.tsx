import LogoMarqueeRow from './logo-marquee-row';
import styles from './logo-marquee.module.css';

const LogoMarquee = () => {
  return (
    <section
      id="infinite-logos"
      className={styles.heroInfiniteLogos}
    >
      <div className={styles.track}>
        <LogoMarqueeRow />
        <LogoMarqueeRow isDuplicate />
      </div>
    </section>
  );
};

export default LogoMarquee;
