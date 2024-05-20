import Stat from './Stat';
import PhotoCardHero from './PhotoCardHero';
import Note from './Note';
import Button from './Button';
import Badge from './Badge';

const Hero = () => {
  return (
    <section
      className={`hero mx-auto mt-[var(--m)] flex w-full max-w-[var(--container-mobile)] flex-col justify-start gap-[var(--m)] px-[var(--s)] tablet:mt-[120px] tablet:max-w-[var(--container-tablet)] desktop:max-w-[var(--container-desktop)]`}
    >
      <article className={`hero__photo flex items-center justify-start`}>
        <div
          className={`hero__stats-container flex max-w-[160px] grow items-center justify-center`}
        >
          <ul
            className={`hero__stats-wrapper flex w-[100px] flex-col justify-start gap-[var(--s)]`}
          >
            <Stat
              quantity="16+"
              text="лет опыта"
            />
            <Stat
              quantity="4+"
              text="года жизни в США"
            />
            <Stat
              quantity="200+"
              text="довольных учеников"
            />
          </ul>
        </div>
        <div
          className={`hero__photo-container flex min-w-[178px] grow items-center justify-center`}
        >
          <div
            className={`hero__photo-wrapper relative flex items-center justify-start`}
          >
            <div
              className={`circle absolute -right-10 -top-2 h-40 w-40 animate-blob rounded-full bg-[var(--primary-10)] opacity-50 mix-blend-multiply blur-xl filter [animation-delay:_0.5s]`}
            ></div>
            <div
              className={`circle absolute -left-5 -top-1 h-40 w-40 animate-blob rounded-full bg-[var(--primary-30)] opacity-50 mix-blend-multiply blur-xl filter [animation-delay:_2s]`}
            ></div>
            <div
              className={`circle absolute -bottom-8 h-40 w-40 animate-blob rounded-full bg-[var(--primary-20)] opacity-50 mix-blend-multiply blur-xl filter [animation-delay:_4s]`}
            ></div>
            <PhotoCardHero />
            <div
              className={`absolute left-[-20px] top-[139px] animate-wavind-badge-3`}
            >
              <Badge
                text="Hi"
                icon="hi"
                backgroundColor={'--primary-10'}
                isAnimated
              />
            </div>
          </div>
        </div>
      </article>
      <article
        className={`hero__text flex flex-col items-center justify-start gap-[var(--l)] text-center`}
      >
        <h1
          className={`hero__text-title flex flex-col items-center justify-start text-heading-s`}
        >
          <span>В поисках идеального</span>
          <div
            className={`flex h-[36px] flex-col items-center overflow-hidden`}
          >
            <div
              className={`mb-[36px] w-fit animate-slide-words rounded-md bg-[var(--primary-30)] px-3 text-[var(--neutral-00)]`}
            >
              преподавателя
            </div>
            <div
              className={`mb-[36px] w-fit rounded-md bg-[var(--primary-30)] px-3 text-[var(--neutral-00)]`}
            >
              переводчика
            </div>
            <div
              className={`mb-[36px] w-fit rounded-md bg-[var(--primary-30)] px-3 text-[var(--neutral-00)]`}
            >
              преподавателя
            </div>
          </div>
          <span>английского?</span>
        </h1>
        <div
          className={`hero__text-subtitle flex flex-col justify-start gap-[var(--s)]`}
        >
          <p>Привет! Меня зовут Алсу</p>
          <div className={`flip-card relative h-[100px] w-[288px]`}>
            <div
              className={`flip-card__front absolute animate-rotate-first-note [backface-visibility:hidden]`}
            >
              <Note type="tutor">
                Научу тебя понимать и говорить на английском языке, подобрав
                индивидуальную программу
              </Note>
            </div>
            <div
              className={`flip-card__back absolute animate-rotate-second-note [backface-visibility:hidden]`}
            >
              <Note type="translator">
                Помогу твоему бизнесу с устным и письменным переводом, тренингом
                сотрудников
              </Note>
            </div>
          </div>
        </div>
        <div
          className={`hero__button flex flex-col items-center justify-start gap-[var(--xs)]`}
        >
          <p>Запишись на бесплатное занятие</p>
          <Button
            text="Записаться"
            onClick={() => {}}
          />
        </div>
      </article>
    </section>
  );
};

export default Hero;
