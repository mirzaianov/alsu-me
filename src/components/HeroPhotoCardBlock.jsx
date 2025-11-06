import propTypes from 'prop-types';
import Stat from './Stat';
import HeroPhotoCard from './HeroPhotoCard';
import Badge from './Badge';
import hand from '../assets/icons/hand.svg';

const HeroPhotoCardBlock = ({ width }) => {
  return (
    <div className="flex animate-hero-foto-fade-in items-center justify-between desktop:flex-col-reverse desktop:gap-[var(--m)]">
      <div className="flex max-w-[160px] items-center justify-center tablet:min-w-[160px] desktop:max-w-full">
        <ul className="flex w-[100px] flex-col justify-start gap-[var(--s)] tablet:gap-[var(--l)] desktop:w-fit desktop:flex-row desktop:gap-[var(--m)]">
          <Stat
            quantity="16+"
            text="лет опыта"
          />
          <Stat
            quantity="4+"
            text="года работы в США"
          />
          <div className="flex h-[76px] w-full flex-col items-start overflow-hidden desktop:h-[98px]">
            <Stat
              className="animate-slide-stat desktop:animate-slide-stat-desktop mb-[36px] desktop:mb-[49px]"
              quantity="200+"
              text="довольных учеников"
            />
            <Stat
              className="mb-[36px] desktop:mb-[49px]"
              quantity="50+"
              text="успешных кейсов"
            />
            <Stat
              className="mb-[36px] desktop:mb-[49px]"
              quantity="200+"
              text="довольных учеников"
            />
          </div>
        </ul>
      </div>
      <div className="flex min-w-[178px] items-center justify-center tablet:min-w-[400px] desktop:min-w-fit">
        <div className="relative flex items-center justify-start">
          <HeroPhotoCard />
          <div className="absolute -left-[32px] bottom-[24px] animate-waving-badge-3 tablet:bottom-[40px]">
            {width < 577 ? (
              <Badge
                alt="The hand icon with wavy animation"
                text="Hi"
                icon={hand}
                isReversed
                isAnimated
              />
            ) : (
              <Badge
                alt="The hand icon with wavy animation"
                text="Hi"
                icon={hand}
                isReversed
                isAnimated
                size="large"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

HeroPhotoCardBlock.propTypes = {
  width: propTypes.number.isRequired,
};

export default HeroPhotoCardBlock;
