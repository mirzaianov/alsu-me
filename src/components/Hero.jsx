import propTypes from 'prop-types';
import HeroBackground from './HeroBackground';
import HeroPhotoCardBlock from './HeroPhotoCardBlock';
import HeroTextBlock from './HeroTextBlock';
import HeroInfiniteLogos from './HeroInfiniteLogos';
import Button from './Button';

const telegramLink = import.meta.env.VITE_TELEGRAM;

const Hero = ({ width }) => {
  return (
    <section
      id="hero"
      className="relative mt-[64px] flex min-h-[calc(100dvh-80px)] w-full max-w-[360px] scroll-mt-[var(--3xl)] flex-col items-center justify-between gap-[var(--l)] px-[var(--s)]
                tablet:mt-[64px] tablet:min-h-[calc(100dvh-104px)] tablet:max-w-[560px] tablet:scroll-mt-[200px] tablet:gap-[var(--xl)] tablet:px-0
                desktop:max-w-[1300px] desktop:justify-between desktop:px-[var(--3xl)]"
    >
      <HeroBackground />
      <article
        className="flex w-full grow flex-col justify-evenly gap-[var(--s)]
                      tablet:gap-[var(--2xl)]
                      desktop:flex-row-reverse desktop:items-center desktop:justify-between desktop:gap-[var(--xl)]"
      >
        <HeroPhotoCardBlock />
        <HeroTextBlock />
      </article>
      <article
        className="flex animate-hero-text-fade-in flex-col items-center justify-start gap-[var(--xs)]
                  tablet:gap-[var(--m)]
                  desktop:items-start desktop:self-start"
      >
        {width >= 577 ? (
          <p>Запишись на бесплатное пробное занятие</p>
        ) : (
          <p>Запишись на бесплатное занятие</p>
        )}
        {width < 1061 ? (
          <Button link={telegramLink}>
            <span>Записаться</span>
          </Button>
        ) : (
          <Button
            size="large"
            link={telegramLink}
          >
            <span>Записаться</span>
          </Button>
        )}
      </article>
      <article className="w-screen">
        <HeroInfiniteLogos />
      </article>
    </section>
  );
};

Hero.propTypes = {
  width: propTypes.number.isRequired,
};

export default Hero;
