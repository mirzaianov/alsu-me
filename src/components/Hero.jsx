import { RoughNotation } from 'react-rough-notation';
import HeroBackground from './HeroBackground';
import HeroPhotoCardBlock from './HeroPhotoCardBlock';
import HeroTextBlock from './HeroTextBlock';
import HeroInfiniteLogos from './HeroInfiniteLogos';
import HeroCTA from './HeroCTA';
import useMediaQuery from '../hooks/useMediaQuery';
import styles from './Hero.module.css';

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
