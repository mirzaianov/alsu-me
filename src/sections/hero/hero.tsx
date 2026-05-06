import Background from './background';
import HeroDynamicHighlights from './hero-dynamic-highlights';
import LogoMarquee from './logo-marquee';
import HeroCta from './hero-cta';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section
      id="hero"
      className={styles.hero}
    >
      <Background />
      <HeroDynamicHighlights />
      <HeroCta />
      <article className={styles.logos}>
        <LogoMarquee />
      </article>
    </section>
  );
};

export default Hero;
