import Background from './background';
import HeroDynamicHighlights from './hero-dynamic-highlights';
import LogoMarquee from './logo-marquee';
import HeroCta from './hero-cta';
import Introduction from './introduction';
import ProfileSummary from './profile-summary';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Background />
      <HeroDynamicHighlights>
        <ProfileSummary />
        <Introduction />
      </HeroDynamicHighlights>
      <HeroCta />
      <article className={styles.logos}>
        <LogoMarquee />
      </article>
    </section>
  );
};

export default Hero;
