import Button from './Button';
import PhotoCardAbout from './PhotoCardAbout';
import Badge from './Badge';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';

const telegramLink = import.meta.env.VITE_TELEGRAM;

const About = () => {
  return (
    <section
      id="about"
      className={`my-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-center justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <h2 className={`h2-fade-in animate-h2-fade-in text-heading-s`}>
        Обо мне
      </h2>
      <article
        className={`pop-up relative -mt-4 mb-[82px] flex animate-pop-up items-center justify-start`}
      >
        <div
          className={`absolute -right-10 -top-2 h-40 w-40 animate-blob rounded-full bg-primary-30 opacity-70 mix-blend-multiply blur-xl filter [animation-delay:_0.5s]`}
        ></div>
        <div
          className={`absolute -left-5 -top-1 h-40 w-40 animate-blob rounded-full bg-primary-20 opacity-70 mix-blend-multiply blur-xl filter [animation-delay:_2s]`}
        ></div>
        <div
          className={`absolute -bottom-5 h-40 w-40 animate-blob rounded-full bg-primary-40 mix-blend-multiply blur-xl filter [animation-delay:_4s]`}
        ></div>
        <PhotoCardAbout />
        <div
          className={`absolute -right-[70px] top-[150px] animate-waving-badge-3`}
        >
          <Badge
            text="Speaking"
            icon={usa}
            type={'secondary-45'}
          />
        </div>
        <div
          className={`absolute -right-[70px] top-[225px] animate-waving-badge-4 [animation-delay:_0.1s]`}
        >
          <Badge
            text="Writing"
            icon={uk}
            type={'secondary-15'}
          />
        </div>
        <div
          className={`absolute -left-[60px] top-[190px] animate-waving-badge-4 [animation-delay:_0.4s]`}
        >
          <Badge
            text="Listening"
            icon={uk}
            type={'secondary-25'}
          />
        </div>
        <div
          className={`absolute -left-[50px] top-[250px] animate-waving-badge-3 [animation-delay:_0.7s]`}
        >
          <Badge
            text="Reading"
            icon={usa}
            type={'secondary-15'}
          />
        </div>
      </article>
      <article
        className={`flex flex-col items-center justify-start gap-[var(--l)]`}
      >
        <div
          className={`flex flex-col items-center justify-start gap-[var(--m)]`}
        >
          <p className="p-fade-in animate-p-fade-in">
            Меня зовут Алсу Каримова, и я рада приветствовать тебя на своём
            сайте!
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Я дипломированный преподаватель и переводчик английского и немецкого
            языков с многолетним опытом профессиональной деятельности в
            компаниях из России, Германии и США.
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Я занимаюсь преподаванием и переводами уже более 16 лет и продолжаю
            с удовольствием делиться своими знаниями как с учениками разных
            возрастов и уровней подготовки, так с и бизнесом.
          </p>
          <p className="p-fade-in animate-p-fade-in">
            Если ты хочешь начать изучение английского с нуля, улучшить свои
            навыки или же заказать устный / письменный перевод - то я
            нетерпением жду возможности помочь тебе в этом!
          </p>
        </div>
        <div className="pop-up animate-pop-up">
          <Button
            text="Записаться бесплатно"
            link={telegramLink}
          />
        </div>
      </article>
    </section>
  );
};

export default About;
