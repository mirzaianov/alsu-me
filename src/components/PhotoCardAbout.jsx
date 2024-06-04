import Photo from '../assets/img/photo-about.png';

const PhotoCardAbout = () => {
  return (
    // Container
    <div className="group relative w-[170px]">
      {/* Inner Container */}
      <div className="clip-path-about duration-250 relative flex h-[210px] items-end overflow-hidden transition-transform ease-in-out hover:scale-[1.1]">
        {/* Color */}
        <div className="absolute bottom-0 left-0 aspect-square w-[170px] rounded-[var(--s)] bg-primary-50" />
        <img
          className="duration-250 group-hover:scale-140 absolute bottom-[20px] left-[5px] z-10 scale-[1.4] transition-transform ease-in-out group-hover:-translate-y-2.5"
          src={Photo}
          alt="Photo"
        />
      </div>
    </div>
  );
};

export default PhotoCardAbout;
