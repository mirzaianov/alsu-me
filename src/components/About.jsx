import Button from './Button';
import PhotoCardAbout from './PhotoCardAbout';
import Badge from './Badge';

//

const About = () => {
  return (
    <section
      className={`about flex w-full max-w-[var(--container-mobile)] flex-col items-center justify-start gap-[var(--l)] px-[var(--s)] py-[var(--xl)]`}
    >
      <h2 className={`about__title text-heading-s`}>Обо мне</h2>
      <article
        className={`about__photo relative -mt-4 flex items-center justify-start`}
      >
        <div
          className={`circle animation-delay-500 absolute -right-10 -top-2 h-40 w-40 animate-blob rounded-full bg-[var(--primary-40)] mix-blend-multiply blur-xl filter`}
        ></div>
        <div
          className={`circle animation-delay-2000 absolute -left-5 -top-1 h-40 w-40 animate-blob rounded-full bg-[var(--primary-30)] opacity-70 mix-blend-multiply blur-xl filter`}
        ></div>
        <div
          className={`circle animation-delay-4000 absolute -bottom-5 h-40 w-40 animate-blob rounded-full bg-[var(--primary-20)] opacity-70 mix-blend-multiply blur-xl filter`}
        ></div>
        <PhotoCardAbout />
        <div
          className={`absolute left-[-20px] top-[139px] animate-wavind-badge`}
        >
          <Badge
            text="Listening"
            icon="uk"
            backgroundColor={'--secondary-25'}
            isAnimated
          />
        </div>
      </article>
      <article
        className={`hero__text flex flex-col items-center justify-start gap-[var(--l)]`}
      >
        <div
          className={`flex flex-col items-center justify-start gap-[var(--m)]`}
        >
          <p>
            Меня зовут Алсу Каримова, и я рада приветствовать тебя на своём
            сайте!
          </p>
          <p>
            Я дипломированный преподаватель и переводчик английского и немецкого
            языков с многолетним опытом профессиональной деятельности в
            компаниях из России, Германии и США.
          </p>
          <p>
            Я занимаюсь преподаванием и переводами уже более 16 лет и продолжаю
            с удовольствием делиться своими знаниями как с учениками разных
            возрастов и уровней подготовки, так с и бизнесом.
          </p>
          <p>
            Если ты хочешь начать изучение английского с нуля, улучшить свои
            навыки или же заказать устный / письменный перевод - то я
            нетерпением жду возможности помочь тебе в этом!
          </p>
        </div>
        <Button text="Записаться бесплатно" />
      </article>
    </section>
  );
};

export default About;
