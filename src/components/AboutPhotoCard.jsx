import alsuAbout from '../assets/img/about/alsu-about.png';
import alsuAboutTablet from '../assets/img/about/alsu-about-tablet.png';

const AboutPhotoCard = () => {
  return (
    // Container
    <div className="group relative w-[170px] tablet:w-[300px]">
      {/* Inner Container */}
      <div className="relative flex h-[210px] items-end overflow-hidden rounded-[var(--s)] transition-transform duration-300 ease-in-out hover:scale-[1.1] tablet:h-[365px]">
        {/* Color */}
        <div className="absolute bottom-0 left-0 size-[var(--img-size-mobile)] rounded-[var(--s)] bg-primary-40 tablet:size-[var(--img-size-tablet)]" />
        <img
          className="group-hover:scale-140 absolute -bottom-[4px] left-[10px] z-10 scale-[1.5] transition-transform delay-150 duration-300 ease-in-out group-hover:-translate-y-2.5 tablet:-bottom-[8px] tablet:left-[18px] tablet:scale-[1.5]"
          src={alsuAbout}
          srcSet={`
                   ${alsuAbout} 577w,
                   ${alsuAboutTablet}
                 `}
          alt="Alsu in a formal office suit"
        />
      </div>
    </div>
  );
};

export default AboutPhotoCard;
