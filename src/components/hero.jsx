import { RoughNotation } from 'react-rough-notation';
import HeroBackground from './hero-background';
import HeroPhotoCardBlock from './hero-photo-card-block';
import HeroTextBlock from './hero-text-block';
import HeroInfiniteLogos from './hero-infinite-logos';
import HeroCTA from './hero-cta';
import useMediaQuery from '../hooks/use-media-query';
import styles from './hero.module.css';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 576px)');

  return (
    <section
      id="hero"
      className={styles.hero}
    >
      <HeroBackground />
      <article className={styles.content}>
        <HeroPhotoCardBlock />
        <HeroTextBlock />
      </article>
      <article className={styles.ctaBlock}>
        {isMobile ? (
          <p className={styles.ctaText}>
            Запишись на{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="hsla(353, 100%, 65%, 1)"
              animationDelay="2000"
              strokeWidth="3"
              animationDuration="2000"
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
              animationDelay="2000"
              strokeWidth="4"
              animationDuration="2000"
            >
              бесплатное
            </RoughNotation>{' '}
            пробное занятие
          </p>
        )}
        <HeroCTA
          text="Записаться"
          ariaLabel="Записаться"
          size="large"
          link="https://t.me/sue_onlineenglish"
        />
      </article>
      <article className={styles.logos}>
        <HeroInfiniteLogos />
      </article>
    </section>
  );
};

export default Hero;
