import Photo from '../assets/img/photo-hero.png';

const PhotoCardHero = () => {
  const style = {
    width: '170px',
  };

  // Person / Container
  return (
    <div
      className={`
        group
        relative
        w-[185px]
      `}
    >
      {/* Person Container / Inner Container */}
      <div
        className={`
          clip-path
          duration-250
          relative
          flex
          h-[210px]
          items-end
          overflow-hidden
          transition-transform
          ease-in-out
          hover:scale-[1.1]
        `}
      >
        <div
          className={`
            absolute
            bottom-[10px]
            left-[3px]
            aspect-square
            w-[170px]
            -rotate-[2.5deg]
            rounded-[var(--s)]
            border-2
            border-[var(--neutral-90)]
          `}
        />

        {/* Circle / Image 1 */}
        <div
          className={`
            absolute
            bottom-[3px]
            right-[3px]
            aspect-square
            w-[170px]
            rotate-[2.5deg]
            rounded-[var(--s)]
            bg-[var(--primary-40)]
          `}
        />
        {/* Img / Image 2 */}
        <img
          className={`
            duration-250
            group-hover:scale-140
            absolute
            bottom-[25px]
            left-[-20px]
            z-10
            scale-[1.7]
            transition-transform
            ease-in-out
            group-hover:-translate-y-2.5
          `}
          src={Photo}
          alt="Photo"
        />
      </div>
    </div>
  );
};

export default PhotoCardHero;