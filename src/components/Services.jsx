import ServiceCard from './ServiceCard';
import Badge from './Badge';
import tutor from '../assets/img/services/tutor.png';
import translator from '../assets/img/services/translator.png';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';
import services from '../assets/img/services/services.png';

const serviceCardData = [
  {
    delay: 0,
    badgeOneText: 'General',
    badgeTwoText: 'Travel',
    src: tutor,
    alt: 'Преподаватель',
    subheading: 'Индивидуальные занятия на платформе Zoom',
    description: [
      'Программа под запрос',
      'Прокачка всех 4 навыков',
      'Домашнее задание с подробным разбором',
    ],
  },
  {
    delay: 0,
    badgeOneText: 'Education',
    badgeTwoText: 'Business',
    src: translator,
    alt: 'Переводчик',
    subheading: 'Переводы',
    description: [
      'Письменные',
      'Устные',
      'Английский - Русский',
      'Русский - Английский',
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative my-[var(--mobile-y-margin)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                  tablet:my-[var(--tablet-y-margin)] tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--2xl)] tablet:px-[var(--xl)]
                  desktop:my-[var(--desktop-y-margin)] desktop:max-w-[var(--container-desktop)] desktop:gap-[var(--3xl)] desktop:px-[var(--3xl)]"
    >
      <h2
        className="text-balance text-heading-s
                    tablet:text-heading-m
                    desktop:text-heading-l"
      >
        Что я предлагаю
      </h2>
      <article
        className="flex flex-col items-center justify-center gap-[var(--l)]
                   tablet:gap-[var(--xl)]
                   desktop:w-full desktop:flex-row-reverse desktop:justify-between"
      >
        <img
          className="ml-8 h-[var(--img-size-mobile)]
                     tablet:ml-12 tablet:h-[var(--img-size-tablet)]
                     desktop:h-auto desktop:w-4/12"
          src={services}
          alt="Services"
          loading="lazy"
        />
        <div
          className="flex max-w-[var(--mobile-text-wrapper)] flex-col justify-start gap-[var(--m)] text-start
                        tablet:max-w-[var(--tablet-text-wrapper)] tablet:justify-between tablet:gap-[var(--s)]
                        desktop:w-7/12 desktop:max-w-[var(--desktop-text-wrapper)]"
        >
          <p className="p-fade-in animate-p-fade-in text-pretty">
            В своих занятиях я акцентирую внимание на развитии разговорных
            навыков и понимании аутентичной речи.{' '}
          </p>
          <p className="p-fade-in animate-p-fade-in text-pretty">
            Моей целью является помощь ученикам в достижении своих языковых
            целей, будь то повышение уровня разговорной речи, подготовка к
            экзаменам или обогащение словарного запаса.
          </p>
          <p className="p-fade-in animate-p-fade-in text-pretty">
            Моя методика преподавания основана на индивидуальном подходе к
            каждому ученику. Я стремлюсь создать комфортную и дружелюбную
            атмосферу на занятиях, где ученики могут свободно выражать свои
            мысли на английском и развивать навыки общения.
          </p>
        </div>
      </article>
      <article
        className="relative flex flex-col items-center gap-[var(--xl)]
                        tablet:gap-[var(--2xl)]
                        desktop:gap-[var(--3xl)]"
      >
        <div
          className="relative flex flex-col items-center gap-[var(--m)]
                        tablet:gap-[var(--l)]
                        desktop:gap-[var(--xl)]"
        >
          <h3
            className="max-w-[var(--mobile-text-wrapper)] text-center text-body-bold uppercase
            tablet:max-w-[var(--tablet-text-wrapper)] tablet:text-heading-s
            desktop:max-w-[var(--desktop-text-wrapper)]"
          >
            Прокачаю все 4 навыка
          </h3>
          <ul
            className="grid grid-flow-row grid-cols-1 justify-items-center gap-[var(--s)]
                         tablet:grid-cols-2 tablet:gap-[var(--l)]
                         desktop:grid-cols-4 desktop:gap-[var(--xl)]"
          >
            <li
              className="expand tablet:expand desktop:expand
                         origin-center animate-expand-1 tablet:animate-expand-1-tablet
                         tablet:justify-self-end desktop:animate-expand-1-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United States of America"
                text="Speaking"
                icon={usa}
                type="secondary-15"
              />
            </li>
            <li
              className="expand tablet:expand desktop:expand
                         origin-center animate-expand-2 tablet:animate-expand-2-tablet
                         tablet:justify-self-start desktop:animate-expand-2-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United Kingdom"
                text="Writing"
                icon={uk}
                type="secondary-25"
              />
            </li>
            <li
              className="expand tablet:expand desktop:expand
                         origin-center animate-expand-3 tablet:animate-expand-3-tablet
                         tablet:justify-self-end desktop:animate-expand-3-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United Kingdom"
                text="Listening"
                icon={uk}
                type="secondary-45"
              />
            </li>
            <li
              className="expand tablet:expand desktop:expand
                         origin-center animate-expand-4 tablet:animate-expand-4-tablet
                         tablet:justify-self-start desktop:animate-expand-4-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United States of America"
                text="Reading"
                icon={usa}
                type="secondary-55"
              />
            </li>
          </ul>
        </div>
        <div
          className="relative flex flex-col items-center gap-[var(--s)]
                        tablet:gap-[var(--l)]
                        desktop:gap-[var(--xl)]"
        >
          <h3
            className="max-w-[var(--mobile-text-wrapper)] text-center text-body-bold uppercase
            tablet:max-w-[var(--tablet-text-wrapper)] tablet:text-heading-s
            desktop:max-w-[var(--desktop-text-wrapper)]"
          >
            Подготовлю к любым целям
          </h3>
          <ul
            className="grid grid-flow-row grid-cols-1 justify-items-center gap-[var(--s)]
                       tablet:grid-cols-2 tablet:gap-[var(--l)]
                       desktop:grid-cols-4 desktop:gap-[var(--xl)]"
          >
            <li
              className="expand tablet:expand desktop:expand
              origin-center animate-expand-1 tablet:animate-expand-1-tablet
              tablet:justify-self-end desktop:animate-expand-1-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United States of America"
                text="Travel"
                icon={usa}
                type="secondary-15"
              />
            </li>
            <li
              className="expand tablet:expand desktop:expand
              origin-center animate-expand-2 tablet:animate-expand-2-tablet
              tablet:justify-self-start desktop:animate-expand-2-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United Kingdom"
                text="General"
                icon={uk}
                type="secondary-25"
              />
            </li>
            <li
              className="expand tablet:expand desktop:expand
              origin-center animate-expand-3 tablet:animate-expand-3-tablet
              tablet:justify-self-end desktop:animate-expand-3-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United Kingdom"
                text="Business"
                icon={uk}
                type="secondary-45"
              />
            </li>
            <li
              className="expand tablet:expand desktop:expand
              origin-center animate-expand-4 tablet:animate-expand-4-tablet
              tablet:justify-self-start desktop:animate-expand-4-desktop desktop:justify-self-center"
            >
              <Badge
                alt="The flag of the United States of America"
                text="Education"
                icon={usa}
                type="secondary-55"
              />
            </li>
          </ul>
        </div>
      </article>
      <article
        className="relative flex flex-col items-center gap-[var(--m)]
                        tablet:gap-[var(--l)]
                        desktop:gap-[var(--xl)]"
      >
        <h3
          className="max-w-[var(--mobile-text-wrapper)] text-center text-body-bold uppercase
              tablet:max-w-[var(--tablet-text-wrapper)] tablet:text-heading-s
              desktop:max-w-[var(--desktop-text-wrapper)]"
        >
          Базовые услуги
        </h3>
        <div
          className="flex
                     flex-col gap-[var(--l)] text-body tablet:flex-row
                     tablet:flex-wrap tablet:justify-center tablet:gap-[var(--xl)] desktop:gap-[var(--2xl)]"
        >
          {serviceCardData.map((item) => (
            <ServiceCard
              key={item.alt}
              {...item}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Services;
