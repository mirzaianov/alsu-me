import Stat from './Stat';
import PhotoCard from './PhotoCardHero';
import Note from './Note';
import Button from './Button';

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
          className={`hero__photo-container relative flex min-w-[178px] grow items-center justify-center`}
        >
          {/* add bg */}
          <div
            className={`circle animate-blob absolute -right-1 -top-1 h-40 w-40 rounded-full bg-[var(--primary-10)] opacity-50 mix-blend-multiply blur-xl filter`}
          ></div>
          <div
            className={`circle animate-blob animation-delay-2000 absolute -left-1 -top-1 h-40 w-40 rounded-full bg-[var(--primary-20)] opacity-50 mix-blend-multiply blur-xl filter`}
          ></div>
          <div
            className={`circle animate-blob animation-delay-4000 absolute -bottom-6 h-40 w-40 rounded-full bg-[var(--primary-30)] opacity-50 mix-blend-multiply blur-xl filter`}
          ></div>
          <div
            className={`hero__photo-wrapper flex items-center justify-start`}
          >
            <PhotoCard />
          </div>
        </div>
      </article>
      <article
        className={`hero__text flex flex-col items-center justify-start gap-[var(--l)] text-center`}
      >
        <div
          className={`hero__text-title flex flex-col items-center justify-start text-heading-s`}
        >
          <p>В поисках идеального</p>
          <p
            className={`bg-[var(--primary-30)] px-[var(--xs)] text-[var(--text-00)]`}
          >
            преподавателя
          </p>
          <p>английского?</p>
        </div>
        <div
          className={`hero__text-subtitle flex flex-col justify-start gap-[var(--s)]`}
        >
          <p>Привет! Меня зовут Алсу</p>
          <Note type="tutor">
            Научу тебя понимать и говорить на английском языке, подобрав
            индивидуальную программу
          </Note>
        </div>
        <div
          className={`hero__button flex flex-col items-center justify-start gap-[var(--xs)]`}
        >
          <p>Запишись на бесплатное занятие</p>
          <Button text="Записаться" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
