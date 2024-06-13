import alsuHero from '../assets/img/alsu-hero.png';
import alsuHeroTablet from '../assets/img/alsu-hero-tablet.png';

const PhotoCardHero = () => {
  return (
    // Container
    <div className="group relative w-[185px] tablet:w-[330px]">
      {/* Inner Container */}
      <div className="clip-path-hero tablet:clip-path-hero-tablet relative flex h-[210px] items-end overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.1] tablet:h-[380px]">
        {/* Border */}
        <div className="absolute bottom-[14px] left-[3px] aspect-square w-[var(--img-size-mobile)] -rotate-[2.5deg] rounded-[var(--s)] border-2 border-[var(--neutral-90)] tablet:bottom-[22px] tablet:left-[6px] tablet:w-[var(--img-size-tablet)]" />
        {/* Color */}
        <div className="absolute bottom-[3px] right-[3px] aspect-square w-[var(--img-size-mobile)] rotate-[2.5deg] rounded-[var(--s)] bg-primary-50 tablet:bottom-[6px] tablet:right-[6px] tablet:w-[var(--img-size-tablet)]" />
        <img
          className="group-hover:scale-140 absolute -bottom-[35px] -left-[5px] z-10 scale-[0.95] transition-transform delay-150 duration-300 ease-in-out group-hover:-translate-y-2.5
                     tablet:-bottom-[64px] tablet:-left-[8px] tablet:scale-[1]"
          src={alsuHero}
          srcSet={`
                   ${alsuHero} 577w,
                   ${alsuHeroTablet}
                 `}
          alt="Alsu in a formal office suit"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PhotoCardHero;
