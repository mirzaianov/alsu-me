import ServiceCard from './ServiceCard';
import tutorImage from '../assets/icons/tutor.svg';
import translatorImage from '../assets/icons/translator.svg';

const serviceCardData = [
  {
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
      className={`my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <h2 className={`text-heading-s`}>Что я предлагаю</h2>

      <article
        className={`flex flex-col items-center justify-start gap-[var(--m)]`}
      >
        <p>
          В своих занятиях я акцентирую внимание на развитии разговорных навыков
          и понимании аутентичной речи.{' '}
        </p>
        <p>
          Моей целью является помощь ученикам достичь своих языковых целей, будь
          то повышение уровня разговорной речи, подготовка к экзаменам или
          обогащение словарного запаса.
        </p>
        <p>
          Моя методика преподавания основана на индивидуальном подходе к каждому
          ученику. Я стремлюсь создать комфортную и дружелюбную атмосферу на
          занятиях, где ученики могут свободно выражать свои мысли на английском
          и развивать навыки общения.
        </p>
      </article>

      <article className={`flex flex-col gap-[var(--l)]`}>
        {serviceCardData.map((item) => (
          <ServiceCard
            key={item.alt}
            {...item}
          />
        ))}
      </article>
    </section>
  );
};

export default Services;
