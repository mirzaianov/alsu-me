import ServiceCard from './ServiceCard';
import Badge from './Badge';
import tutor from '../assets/img/tutor.png';
import translator from '../assets/img/translator.png';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';
import services from '../assets/img/services.png';

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
      className="my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]
                  tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--xl)] tablet:px-[var(--xl)]
                  desktop:my-[var(--2xl)] desktop:max-w-[var(--container-desktop)] desktop:gap-[var(--2xl)] desktop:px-[var(--2xl)]"
    >
      <h2
        className="text-heading-s
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
          <p className="p-fade-in animate-p-fade-in">
            В своих занятиях я акцентирую внимание на развитии разговорных
            навыков и понимании аутентичной речи.{' '}
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Моей целью является помощь ученикам достичь своих языковых целей,
            будь то повышение уровня разговорной речи, подготовка к экзаменам
            или обогащение словарного запаса.
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Моя методика преподавания основана на индивидуальном подходе к
            каждому ученику. Я стремлюсь создать комфортную и дружелюбную
            атмосферу на занятиях, где ученики могут свободно выражать свои
            мысли на английском и развивать навыки общения.
          </p>
        </div>
      </article>
      <article
        className="flex flex-col gap-[var(--l)] text-body
                   tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-[var(--xl)]
                   desktop:gap-[var(--2xl)]"
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
