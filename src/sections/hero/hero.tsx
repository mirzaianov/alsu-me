import Background from './background';
import ProfileSummary from './profile-summary';
import Introduction from './introduction';
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
      <article className={styles.content}>
        <ProfileSummary />
        <Introduction />
      </article>
      <HeroCta />
      <article className={styles.logos}>
        <LogoMarquee />
      </article>
    </section>
  );
};

export default Hero;
