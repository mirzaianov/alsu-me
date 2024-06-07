import ServiceCard from './ServiceCard';
import Badge from './Badge';
import tutorImage from '../assets/icons/tutor.svg';
import translatorImage from '../assets/icons/translator.svg';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';

const serviceCardData = [
  {
    delay: 0,
    badgeOneText: 'General',
    badgeTwoText: 'Travel',
    src: tutorImage,
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
    src: translatorImage,
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
      className="my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                  tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                  desktop:max-w-[var(--container-desktop)] desktop:px-[var(--2xl)]"
    >
      <h2
        className="text-heading-s
                    tablet:text-heading-m
                    desktop:text-heading-l"
      >
        Что я предлагаю
      </h2>
      <article
        className="flex max-w-[var(--mobile-text-wrapper)] flex-col items-center justify-start gap-[var(--m)]
                      tablet:max-w-[var(--tablet-text-wrapper)]
                      desktop:max-w-[var(--desktop-text-wrapper)]"
      >
        <p className="p-fade-in animate-p-fade-in">
          В своих занятиях я акцентирую внимание на развитии разговорных навыков
          и понимании аутентичной речи.{' '}
        </p>
        <p className="p-fade-in animate-p-fade-in">
          Моей целью является помощь ученикам достичь своих языковых целей, будь
          то повышение уровня разговорной речи, подготовка к экзаменам или
          обогащение словарного запаса.
        </p>
        <p className="p-fade-in animate-p-fade-in">
          Моя методика преподавания основана на индивидуальном подходе к каждому
          ученику. Я стремлюсь создать комфортную и дружелюбную атмосферу на
          занятиях, где ученики могут свободно выражать свои мысли на английском
          и развивать навыки общения.
        </p>
      </article>
      <article
        className="flex flex-col gap-[var(--l)]
                          text-body tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-[var(--xl)]"
      >
        {serviceCardData.map((item) => (
          <div
            key={item.alt}
            className="flex flex-col gap-[var(--m)]"
          >
            <div className="flex justify-between">
              <div className="relative -left-[8px]">
                <Badge
                  text={item.badgeOneText}
                  icon={uk}
                  type="secondary-15"
                />
              </div>
              <div className="relative -right-[8px]">
                <Badge
                  text={item.badgeTwoText}
                  icon={usa}
                  type="secondary-25"
                />
              </div>
            </div>
            <ServiceCard {...item} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default Services;
