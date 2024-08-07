import Note from './Note';

const HeroTextBlock = () => {
  return (
    <div className="flex animate-hero-text-fade-in flex-col items-center justify-between gap-[var(--m)] text-center tablet:gap-[var(--xl)] desktop:items-start desktop:gap-[var(--2xl)] desktop:text-start">
      <h1 className="flex flex-col items-center justify-start text-heading-s tablet:text-heading-l desktop:items-start desktop:text-heading-xl">
        <span>В поисках идеального</span>
        <div className="flex h-[36px] flex-col items-center overflow-hidden text-text-0 tablet:h-[50px] desktop:h-[70px] desktop:w-full desktop:items-start">
          <div className="mb-[36px] w-fit animate-slide-words rounded-md bg-primary-30 px-3 tablet:mb-[50px] tablet:animate-slide-words-tablet tablet:rounded-lg tablet:px-5 desktop:mb-[70px] desktop:animate-slide-words-desktop desktop:rounded-xl desktop:px-6">
            преподавателя
          </div>
          <div className="mb-[36px] w-fit rounded-md bg-primary-30 px-3 tablet:mb-[50px] tablet:rounded-lg tablet:px-5 desktop:mb-[70px] desktop:rounded-xl desktop:px-6">
            переводчика
          </div>
          <div className="mb-[36px] w-fit rounded-md bg-primary-30 px-3 tablet:mb-[50px] tablet:rounded-lg tablet:px-5 desktop:mb-[70px] desktop:rounded-xl desktop:px-6">
            преподавателя
          </div>
        </div>
        <span>английского?</span>
      </h1>
      {/* block */}
      <div className="flex w-full flex-col items-center justify-between gap-[var(--s)] tablet:max-w-[500px] tablet:flex-row desktop:max-w-full desktop:justify-between desktop:gap-[var(--l)]">
        {/* greeting */}
        <div className="desktop:shrink-1 flex justify-center tablet:flex-col tablet:items-start">
          <span>Привет!&nbsp;</span>
          <span className="desktop:text-wrap">Меня зовут Алсу</span>
        </div>
        {/* notes */}
        <div className="preserve-3d relative flex h-[100px] w-[288px] items-center justify-center bg-transparent desktop:h-[137px] desktop:w-[366px] desktop:shrink-0">
          <div className="backface-hidden rotate-first-note preserve-3d absolute inset-0">
            <Note type="translator">
              Научу тебя понимать и говорить на английском языке, подобрав
              индивидуальную программу
            </Note>
          </div>
          <div className="backface-hidden rotate-second-note preserve-3d absolute inset-0">
            <Note>
              Помогу твоему бизнесу с устным и письменным переводом, тренингом
              сотрудников
            </Note>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTextBlock;
