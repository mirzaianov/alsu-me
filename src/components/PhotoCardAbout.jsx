import alsuAbout from '../assets/img/alsu-about.png';
import alsuAboutTablet from '../assets/img/alsu-about-tablet.png';

const PhotoCardAbout = () => {
  return (
    // Container
    <div className="group relative w-[170px] tablet:w-[300px]">
      {/* Inner Container */}
      <div
        className="clip-path-about tablet:clip-path-about-tablet relative flex h-[210px] items-end overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.1]
                      tablet:h-[365px]"
      >
        {/* Color */}
        <div
          className={`absolute bottom-0 left-0 size-[var(--img-size-mobile)] rounded-[var(--s)] bg-primary-40
                      tablet:size-[var(--img-size-tablet)]`}
        />
        <img
          className="group-hover:scale-140 absolute bottom-[0px] left-[5px] z-10 scale-[1.7] transition-transform delay-150 duration-300 ease-in-out group-hover:-translate-y-2.5
                     tablet:bottom-[0px] tablet:left-[8px]"
          src={alsuAbout}
          srcSet={`
                   ${alsuAbout} 577w,
                   ${alsuAboutTablet}
                 `}
          alt="Alsu in a formal office suit smiling"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PhotoCardAbout;
