import propTypes from 'prop-types';
import Button from './Button';
import AboutPhotoCard from './AboutPhotoCard';
import rocket from '../assets/img/rocket.png';
import firstPlace from '../assets/img/first-place.png';

const telegramLink = import.meta.env.VITE_TELEGRAM;

const About = ({ width }) => {
  return (
    <section
      id="about"
      className="relative my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--2xl)] tablet:px-[var(--xl)]
                desktop:my-[var(--2xl)] desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
    >
      <h2
        className="text-heading-s
                      tablet:text-heading-m
                      desktop:text-heading-l"
      >
        Обо мне
      </h2>
      <div
        className="flex flex-col items-center gap-[var(--l)]
                  desktop:flex-row desktop:items-start desktop:justify-between"
      >
        <article
          className="relative -mt-4 flex items-center justify-start
                    desktop:w-4/12"
        >
          <AboutPhotoCard />
          <div
            className="absolute -left-[30px] bottom-[8px] flex size-12 animate-waving-badge-3 items-center justify-center rounded-full bg-secondary-25 p-3 shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]
                       tablet:-left-[40px] tablet:bottom-[24px] tablet:size-16"
          >
            <img
              className="h-full"
              src={rocket}
              alt="Rocket Image"
            />
          </div>
          <div
            className="absolute left-[150px] top-[60px] flex size-12 animate-waving-badge-4 items-center justify-center rounded-full bg-secondary-15 p-2 shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]
                       tablet:left-[280px] tablet:top-[120px] tablet:size-16"
          >
            <img
              className="h-full"
              src={firstPlace}
              alt="First Place Image"
            />
          </div>
        </article>
        <article
          className="flex max-w-[var(--mobile-text-wrapper)] flex-col items-center justify-start gap-[var(--l)]
                    tablet:max-w-[var(--tablet-text-wrapper)] tablet:gap-[var(--xl)]
                    desktop:w-7/12 desktop:max-w-[var(--desktop-text-wrapper)] desktop:items-start desktop:gap-[var(--2xl)]"
        >
          <div className="flex flex-col items-start justify-start gap-[var(--m)]">
            <p className="p-fade-in animate-p-fade-in">
              Меня зовут Алсу Каримова, и я рада приветствовать тебя на своём
              сайте!
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Я дипломированный преподаватель и переводчик английского и
              немецкого языков с многолетним опытом профессиональной
              деятельности в компаниях из России, Германии и США.
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Я занимаюсь преподаванием и переводами уже более 16 лет и
              продолжаю с удовольствием делиться своими знаниями как с учениками
              разных возрастов и уровней подготовки, так и c бизнесом.
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Если ты хочешь начать изучение английского с нуля, улучшить свои
              навыки или же заказать устный / письменный перевод - то я
              нетерпением жду возможности помочь тебе в этом!
            </p>
          </div>
          {width < 1061 ? (
            <Button
              text="Записаться бесплатно"
              link={telegramLink}
            />
          ) : (
            <Button
              text="Записаться бесплатно"
              size="large"
              link={telegramLink}
            />
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
