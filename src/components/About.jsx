import propTypes from 'prop-types';
import Button from './Button';
import AboutPhotoCard from './AboutPhotoCard';
import Badge from './Badge';
import ielts from '../assets/img/about/ielts.png';
import tesol from '../assets/img/about/tesol.png';

const About = ({ width }) => {
  return (
    <section
      id="about"
      className="relative my-[var(--mobile-y-margin)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] tablet:my-[var(--tablet-y-margin)] tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--2xl)] tablet:px-[var(--xl)] desktop:my-[var(--desktop-y-margin)] desktop:max-w-[var(--container-desktop)] desktop:px-[var(--3xl)]"
    >
      <h2 className="text-balance text-heading-s tablet:text-heading-m desktop:text-heading-l">
        Обо мне
      </h2>
      <div className="flex flex-col items-center gap-[var(--l)] desktop:flex-row desktop:items-start desktop:justify-between">
        <article className="relative -mt-4 flex items-center justify-start desktop:w-4/12">
          <AboutPhotoCard />
          <div className="absolute -left-[60px] bottom-[16px] z-10 animate-waving-badge-3 tablet:-left-[80px] tablet:bottom-[24px]">
            {width < 577 ? (
              <Badge
                alt="IELTS"
                icon={ielts}
                type="secondary-25"
              />
            ) : (
              <Badge
                alt="IELTS"
                icon={ielts}
                type="secondary-25"
                size="large"
              />
            )}
          </div>
          <div className="absolute -right-[60px] top-[60px] z-10 animate-waving-badge-4 tablet:-right-[72px] tablet:top-[120px] desktop:left-[270px]">
            {width < 577 ? (
              <Badge
                alt="TESOL"
                icon={tesol}
                type="secondary-15"
              />
            ) : (
              <Badge
                alt="TESOL"
                icon={tesol}
                type="secondary-15"
                size="large"
              />
            )}
          </div>
        </article>
        <article className="flex max-w-[var(--mobile-text-wrapper)] flex-col items-center justify-start gap-[var(--l)] tablet:max-w-[var(--tablet-text-wrapper)] tablet:gap-[var(--xl)] desktop:w-7/12 desktop:max-w-[var(--desktop-text-wrapper)] desktop:items-start desktop:gap-[var(--2xl)]">
          <div className="flex flex-col items-start justify-start gap-[var(--m)]">
            <p className="p-fade-in animate-p-fade-in">
              Меня зовут Алсу Каримова, и я рада приветствовать тебя на своём
              сайте!
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Я дипломированный преподаватель и переводчик английского с опытом
              профессиональной деятельности более 16 лет.
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Уровень владения языком - advanced (C1) - подтвержден
              международным сертификатом IELTS. Также имею сертификат TESOL,
              выданный Arizona State University, который позволяет обучать языку
              в любой стране.
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Если ты хочешь начать изучение английского с нуля, улучшить свои
              навыки или же заказать устный / письменный перевод - то я с
              нетерпением жду возможности помочь тебе в этом!
            </p>
          </div>
          {width < 1061 ? (
            <Button
              ariaLabel="Записаться бесплатно"
              link="https://t.me/sue_onlineenglish"
            >
              <span>Записаться бесплатно</span>
            </Button>
          ) : (
            <Button
              ariaLabel="Записаться бесплатно"
              size="large"
              link="https://t.me/sue_onlineenglish"
            >
              <span>Записаться бесплатно</span>
            </Button>
          )}
        </article>
      </div>
    </section>
  );
};

About.propTypes = {
  width: propTypes.number,
};

export default About;
