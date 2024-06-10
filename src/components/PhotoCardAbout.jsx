import Photo from '../assets/img/photo-about.png';

const PhotoCardAbout = () => {
  return (
    // Container
    <div className="group relative w-[170px] tablet:w-[300px]">
      {/* Inner Container */}
      <div className="clip-path-about duration-250 tablet:clip-path-about-tablet relative flex h-[210px] items-end overflow-hidden transition-transform ease-in-out hover:scale-[1.1] tablet:h-[340px]">
        {/* Color */}
        <div className="absolute bottom-0 left-0 size-[var(--img-size-mobile)] rounded-[var(--s)] bg-primary-50 tablet:size-[var(--img-size-tablet)]" />
        <img
          className="duration-250 group-hover:scale-140 absolute bottom-[20px] left-[5px] z-10 scale-[1.4] transition-transform ease-in-out group-hover:-translate-y-2.5 tablet:bottom-[32px] tablet:left-[16px]"
          src={Photo}
          alt="Photo"
        />
      </div>
    </div>
  );
};

export default PhotoCardAbout;
