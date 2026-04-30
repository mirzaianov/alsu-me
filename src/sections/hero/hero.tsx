import { RoughNotation } from 'react-rough-notation';
import Background from './background';
import ProfileSummary from './profile-summary';
import Introduction from './introduction';
import LogoMarquee from './logo-marquee';
import Actions from './actions';
import useMediaQuery from '../../hooks/use-media-query';
import styles from './hero.module.css';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 576px)');

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
      <article className={styles.ctaBlock}>
        {isMobile ? (
          <p className={styles.ctaText}>
            Запишись на{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="hsla(353, 100%, 65%, 1)"
              animationDelay={2000}
              strokeWidth={3}
              animationDuration={2000}
            >
              бесплатное
            </RoughNotation>{' '}
            занятие
          </p>
        ) : (
          <p>
            Запишись на{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="hsla(353, 100%, 65%, 1)"
              animationDelay={2000}
              strokeWidth={4}
              animationDuration={2000}
            >
              бесплатное
            </RoughNotation>{' '}
            пробное занятие
          </p>
        )}
        <Actions
          text="Записаться"
          ariaLabel="Записаться"
          size="large"
          link="https://t.me/sue_onlineenglish"
        />
      </article>
      <article className={styles.logos}>
        <LogoMarquee />
      </article>
    </section>
  );
};

export default Hero;
