import alsuHero from '../assets/img/hero/alsu-hero.png';
import alsuHeroTablet from '../assets/img/hero/alsu-hero-tablet.png';

const HeroPhotoCard = () => {
  return (
    // Container
    <div className="group relative w-[185px] tablet:w-[330px]">
      {/* Inner Container */}
      <div className="relative flex h-[210px] items-end transition-transform duration-300 ease-in-out hover:scale-[1.1] tablet:h-[380px]">
        {/* Border */}
        <div className="absolute bottom-[10px] left-[3px] aspect-square w-[var(--img-size-mobile)] -rotate-[2.5deg] rounded-[var(--s)] border-2 border-[var(--neutral-90)] tablet:bottom-[20px] tablet:left-[10px] tablet:w-[var(--img-size-tablet)]" />
        {/* Mask */}
        <div className="absolute bottom-0 right-0 h-[210px] w-[var(--img-size-mobile)] rotate-[2.5deg] overflow-hidden rounded-[var(--s)] tablet:h-[380px] tablet:w-[var(--img-size-tablet)]">
          {/* Color */}
          <div className="absolute bottom-0 right-0 aspect-square w-[var(--img-size-mobile)] rounded-[var(--s)] bg-primary-50 tablet:w-[var(--img-size-tablet)]" />
          <img
            fetchpriority="high"
            className="group-hover:scale-140 absolute -bottom-[8px] left-[4px] z-10 -rotate-[2.5deg] scale-[1.5] transition-transform delay-150 duration-300 ease-in-out group-hover:-translate-y-2.5 tablet:bottom-[0px] tablet:left-[8px]"
            src={alsuHero}
            srcSet={`
                     ${alsuHero} 577w,
                     ${alsuHeroTablet}
                   `}
            alt="Alsu in a formal office suit smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPhotoCard;
