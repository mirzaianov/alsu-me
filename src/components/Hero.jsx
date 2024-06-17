import propTypes from 'prop-types';
import Stat from './Stat';
import PhotoCardHero from './PhotoCardHero';
import Note from './Note';
import Button from './Button';
import Badge from './Badge';
import hand from '../assets/icons/hand.svg';
import InfiniteLogos from './InfiniteLogos';

const telegramLink = import.meta.env.VITE_TELEGRAM;

const Hero = ({ width }) => {
  return (
    <section
      id="hero"
      className="relative mt-[64px] flex min-h-[calc(100dvh-80px)] w-full max-w-[360px] scroll-mt-[var(--3xl)] flex-col items-center justify-between gap-[var(--l)] px-[var(--s)]
                tablet:mt-[64px] tablet:min-h-[calc(100dvh-104px)] tablet:max-w-[560px] tablet:scroll-mt-[200px] tablet:gap-[var(--xl)] tablet:px-0
                desktop:max-w-[1300px] desktop:justify-between desktop:px-[var(--3xl)]"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -right-[16px] -top-[80px] size-[200px] animate-blob rounded-full bg-primary-20 mix-blend-multiply blur-[75px] filter tablet:-right-[140px]
                           tablet:-top-[104px] tablet:size-[400px] tablet:animate-blob-tablet tablet:blur-[150px]
                           desktop:-right-[60px] desktop:-top-[104px] desktop:size-[400px] desktop:animate-blob-tablet desktop:blur-[150px]"
        ></div>
        <div
          className="animate-blob2 tablet:animate-blob2-tablet desktop:animate-blob2-tablet absolute left-1/2 top-[calc(50%-40px)] size-[200px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-10 opacity-70 mix-blend-multiply blur-[75px] filter tablet:top-[calc(50%-52px)]
                           tablet:size-[400px] tablet:blur-[150px]
                           desktop:top-[calc(50%-52px)] desktop:size-[400px] desktop:blur-[150px]"
        ></div>
        <div
          className="animate-blob3 tablet:animate-blob3-tablet desktop:animate-blob3-tablet absolute -left-[16px] bottom-0 size-[200px] rounded-full bg-primary-30 opacity-70 mix-blend-multiply blur-[75px] filter tablet:-left-[140px]
                           tablet:size-[400px] tablet:blur-[150px]
                           desktop:-left-[60px] desktop:size-[400px] desktop:blur-[150px]"
        ></div>
      </div>
      <article
        className="flex w-full grow flex-col justify-evenly gap-[var(--s)]
                      tablet:gap-[var(--2xl)]
                      desktop:flex-row-reverse desktop:items-center desktop:justify-between desktop:gap-[var(--xl)]"
      >
        {/* photocard article */}
        <div
          className="flex animate-hero-foto-fade-in items-center justify-between
                    desktop:flex-col-reverse desktop:gap-[var(--m)]"
        >
          {/* stats */}
          <div
            className="flex max-w-[160px] items-center justify-center
                      tablet:min-w-[160px]
                      desktop:max-w-full"
          >
            <ul
              className="flex w-[100px] flex-col justify-start gap-[var(--s)]
                        tablet:gap-[var(--l)]
                        desktop:w-fit desktop:flex-row desktop:gap-[var(--m)]"
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
          {/* photocard */}
          <div
            className="flex min-w-[178px] items-center justify-center
                        tablet:min-w-[400px]
                        desktop:min-w-fit"
          >
            <div className="relative flex items-center justify-start">
              <PhotoCardHero />
              <div
                className="absolute -left-[20px] top-[126px] animate-waving-badge-3
                          tablet:top-[260px]"
              >
                <Badge
                  text="Hi"
                  icon={hand}
                  isReversed
                  isAnimated
                />
              </div>
            </div>
          </div>
        </div>
        {/* text article */}
        <div
          className="flex animate-hero-text-fade-in flex-col items-center justify-between gap-[var(--m)] text-center
                     tablet:gap-[var(--2xl)]
                     desktop:items-start desktop:text-start"
        >
          <h1
            className="flex flex-col items-center justify-start text-heading-s
                      tablet:text-heading-l
                      desktop:items-start desktop:text-heading-xl"
          >
            <span>В поисках идеального</span>
            <div
              className="flex h-[36px] flex-col items-center overflow-hidden text-text-0
                        tablet:h-[50px]
                        desktop:h-[70px] desktop:items-start"
            >
              <div
                className="mb-[36px] w-fit animate-slide-words rounded-md bg-primary-30 px-3 tablet:mb-[50px]
                          tablet:animate-slide-words-tablet tablet:px-5 desktop:mb-[70px]
                          desktop:animate-slide-words-desktop desktop:rounded-xl desktop:px-6"
              >
                преподавателя
              </div>
              <div
                className="mb-[36px] w-fit rounded-md bg-primary-30 px-3
                          tablet:mb-[50px] tablet:px-5
                          desktop:mb-[70px] desktop:rounded-xl desktop:px-6"
              >
                переводчика
              </div>
              <div
                className="mb-[36px] w-fit rounded-md bg-primary-30 px-3
                          tablet:mb-[50px] tablet:px-5
                          desktop:mb-[70px] desktop:rounded-xl desktop:px-6"
              >
                преподавателя
              </div>
            </div>
            <span>английского?</span>
          </h1>
          {/* block */}
          <div
            className="flex w-full flex-col items-center justify-between
                      gap-[var(--s)] tablet:max-w-[500px] tablet:flex-row
                      desktop:max-w-full desktop:flex-wrap desktop:justify-between desktop:gap-[var(--xl)]"
          >
            {/* greeting */}
            <div
              className="flex justify-center
                        tablet:flex-col tablet:items-start"
            >
              <span>Привет!&nbsp;</span>
              <span>Меня зовут Алсу</span>
            </div>
            {/* notes */}
            <div
              className="relative flex h-[100px] w-[288px] items-center justify-center
                        desktop:h-[137px] desktop:w-[365px]"
            >
              <div className="absolute animate-rotate-first-note [backface-visibility:hidden]">
                <Note type="translator">
                  Научу тебя понимать и говорить на английском языке, подобрав
                  индивидуальную программу
                </Note>
              </div>
              <div className="absolute animate-rotate-second-note [backface-visibility:hidden]">
                <Note>
                  Помогу твоему бизнесу с устным и письменным переводом,
                  тренингом сотрудников
                </Note>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="flex animate-hero-text-fade-in flex-col items-center justify-start gap-[var(--xs)]
                  tablet:gap-[var(--m)]
                  desktop:items-start desktop:self-start"
      >
        {width >= 577 ? (
          <p>Запишись на бесплатное пробное занятие</p>
        ) : (
          <p>Запишись на бесплатное занятие</p>
        )}
        {width < 1061 ? (
          <Button
            text="Записаться"
            link={telegramLink}
          />
        ) : (
          <Button
            text="Записаться"
            size="large"
            link={telegramLink}
          />
        )}
      </article>
      <article className="w-screen">
        <InfiniteLogos />
      </article>
    </section>
  );
};

Hero.propTypes = {
  width: propTypes.number.isRequired,
};

export default Hero;
