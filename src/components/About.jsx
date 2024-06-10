import propTypes from 'prop-types';
import Button from './Button';
import PhotoCardAbout from './PhotoCardAbout';
import Badge from './Badge';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';
import wonderwoman from '../assets/icons/wonderwoman.png';

const telegramLink = import.meta.env.VITE_TELEGRAM;

const About = ({ windowWidth }) => {
  return (
    <section
      id="about"
      className="relative my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
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
                  desktop:flex-row desktop:items-start desktop:gap-[var(--2xl)]"
      >
        <article
          className="relative -mt-4 mb-[82px] flex items-center justify-start
                    tablet:mt-0
                    desktop:w-4/12"
        >
          <div
            className="pop-up absolute -right-20 -top-4 animate-pop-up
                      tablet:-right-32 tablet:top-0
                      desktop:right-48 desktop:top-[450px]"
          >
            <img
              className="size-16
                        tablet:size-20"
              src={wonderwoman}
              alt="Superman"
            />
          </div>
          <div
            className="absolute -right-10 -top-2 size-40 animate-blob rounded-full bg-primary-30 opacity-70 mix-blend-multiply blur-xl filter [animation-delay:_0.5s]
                        tablet:-right-10 tablet:-top-8 tablet:size-80 tablet:animate-blob-tablet tablet:[animation-delay:_0.5s]"
          ></div>
          <div
            className="absolute -left-5 -top-1 size-40 animate-blob rounded-full bg-primary-40  mix-blend-multiply blur-xl filter [animation-delay:_2s]
                        tablet:-left-20 tablet:-top-6 tablet:size-80 tablet:animate-blob-tablet tablet:[animation-delay:_2s]"
          ></div>
          <div
            className="absolute -bottom-5 left-12 size-40 animate-blob rounded-full bg-primary-20 opacity-70 mix-blend-multiply blur-xl filter [animation-delay:_4s]
                        tablet:-bottom-16 tablet:left-4 tablet:size-80 tablet:animate-blob-tablet tablet:[animation-delay:_5s]"
          ></div>
          <PhotoCardAbout />
          <div
            className="absolute -right-[70px] top-[150px] animate-waving-badge-3
                      tablet:-right-[40px] tablet:top-[260px]
                      desktop:-right-[10px] desktop:top-[260px]"
          >
            <Badge
              text="Speaking"
              icon={usa}
              type="secondary-45"
            />
          </div>
          <div
            className="absolute -right-[70px] top-[225px] animate-waving-badge-4 [animation-delay:_0.1s]
                      tablet:-right-[25px] tablet:top-[360px]
                      desktop:right-[5px] desktop:top-[360px]"
          >
            <Badge
              text="Writing"
              icon={uk}
              type="secondary-15"
            />
          </div>
          <div
            className="absolute -left-[60px] top-[190px] animate-waving-badge-4 [animation-delay:_0.4s]
                      tablet:-left-[40px] tablet:top-[275px]"
          >
            <Badge
              text="Listening"
              icon={uk}
              type="secondary-25"
            />
          </div>
          <div
            className="absolute -left-[50px] top-[250px] animate-waving-badge-3 [animation-delay:_0.7s]
                      tablet:-left-[30px] tablet:top-[365px]"
          >
            <Badge
              text="Reading"
              icon={usa}
              type="secondary-15"
            />
          </div>
        </article>
        <article
          className="flex max-w-[var(--mobile-text-wrapper)] flex-col items-center justify-start gap-[var(--l)]
                    tablet:max-w-[var(--tablet-text-wrapper)]
                    desktop:w-8/12 desktop:max-w-[var(--desktop-text-wrapper)] desktop:items-start"
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
              разных возрастов и уровней подготовки, так с и бизнесом.
            </p>
            <p className="p-fade-in animate-p-fade-in">
              Если ты хочешь начать изучение английского с нуля, улучшить свои
              навыки или же заказать устный / письменный перевод - то я
              нетерпением жду возможности помочь тебе в этом!
            </p>
          </div>
          {windowWidth < 1060 ? (
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
  windowWidth: propTypes.number,
};

export default About;
