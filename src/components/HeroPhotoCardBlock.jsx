import Stat from './Stat';
import HeroPhotoCard from './HeroPhotoCard';
import Badge from './Badge';
import hand from '../assets/icons/hand.svg';

const HeroPhotoCardBlock = () => {
  return (
    <div
      className="flex animate-hero-foto-fade-in items-center justify-between
                    desktop:flex-col-reverse desktop:gap-[var(--m)]"
    >
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
            text="года работы в США"
          />
          <Stat
            quantity="200+"
            text="довольных учеников"
          />
        </ul>
      </div>
      <div
        className="flex min-w-[178px] items-center justify-center
                        tablet:min-w-[400px]
                        desktop:min-w-fit"
      >
        <div className="relative flex items-center justify-start">
          <HeroPhotoCard />
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
  );
};

export default HeroPhotoCardBlock;
