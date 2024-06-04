import { useState, useEffect } from 'react';
import Stat from './Stat';
import PhotoCardHero from './PhotoCardHero';
import Note from './Note';
import Button from './Button';
import Badge from './Badge';
import hand from '../assets/icons/hand.svg';

const telegramLink = import.meta.env.VITE_TELEGRAM;

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="mx-auto mt-[64px] flex w-full max-w-[var(--container-mobile)] scroll-mt-[var(--3xl)] flex-col justify-start gap-[var(--m)] px-[var(--s)] tablet:mt-[96px] tablet:max-w-[var(--container-tablet)] tablet:gap-[var(--2xl)] tablet:px-0 desktop:max-w-[var(--container-desktop)]"
    >
      <article className="flex animate-hero-foto-fade-in items-center justify-start">
        <div className="flex max-w-[160px] grow items-center justify-center">
          <ul className="flex w-[100px] flex-col justify-start gap-[var(--s)] tablet:gap-[var(--l)]">
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
        <div className="flex min-w-[178px] grow items-center justify-center">
          <div className="relative flex items-center justify-start">
            <div className="absolute -right-10 -top-2 h-40 w-40 animate-blob rounded-full bg-primary-10 opacity-50 mix-blend-multiply blur-xl filter [animation-delay:_0.5s]"></div>
            <div className="absolute -left-5 -top-1 h-40 w-40 animate-blob rounded-full bg-primary-30 opacity-50 mix-blend-multiply blur-xl filter [animation-delay:_2s]"></div>
            <div className="absolute -bottom-8 h-40 w-40 animate-blob rounded-full bg-primary-20 opacity-50 mix-blend-multiply blur-xl filter [animation-delay:_4s]"></div>
            <PhotoCardHero />
            <div className="absolute -left-[20px] top-[139px] animate-waving-badge-3 tablet:top-[260px]">
              <Badge
                text="Hi"
                icon={hand}
                backgroundColor="--primary-10"
                isReversed
                isAnimated
              />
            </div>
          </div>
        </div>
      </article>
      <article className="flex animate-hero-text-fade-in flex-col items-center justify-start gap-[var(--l)] text-center tablet:gap-[var(--2xl)]">
        <h1 className="flex flex-col items-center justify-start text-heading-s tablet:text-heading-l">
          <span>В поисках идеального</span>
          <div className="flex h-[36px] flex-col items-center overflow-hidden text-text-0 tablet:h-[50px]">
            <div className="tablet:animate-slide-words-tablet mb-[36px] w-fit animate-slide-words rounded-md bg-primary-30 px-3 tablet:mb-[50px]">
              преподавателя
            </div>
            <div className="mb-[36px] w-fit rounded-md bg-primary-30 px-3 tablet:mb-[50px]">
              переводчика
            </div>
            <div className="mb-[36px] w-fit rounded-md bg-primary-30 px-3 tablet:mb-[50px]">
              преподавателя
            </div>
          </div>
          <span>английского?</span>
        </h1>
        <div className="flex w-full flex-col justify-between gap-[var(--s)] tablet:max-w-[500px] tablet:flex-row tablet:items-center">
          <div className="flex justify-center tablet:flex-col tablet:items-start">
            <span>Привет!&nbsp;</span>
            <span>Меня зовут Алсу</span>
          </div>
          <div className="relative h-[100px] w-[var(--card-width)] self-center">
            <div className="absolute animate-rotate-first-note [backface-visibility:hidden]">
              <Note type="translator">
                Научу тебя понимать и говорить на английском языке, подобрав
                индивидуальную программу
              </Note>
            </div>
            <div className="absolute animate-rotate-second-note [backface-visibility:hidden]">
              <Note>
                Помогу твоему бизнесу с устным и письменным переводом, тренингом
                сотрудников
              </Note>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[var(--xs)] tablet:gap-[var(--m)]">
          {windowWidth > 576 ? (
            <p>Запишись на бесплатное пробное занятие</p>
          ) : (
            <p>Запишись на бесплатное занятие</p>
          )}
          <Button
            text="Записаться"
            link={telegramLink}
          />
        </div>
      </article>
    </section>
  );
};

export default Hero;
