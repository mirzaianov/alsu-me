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
        w-[178px]
      `}
    >
      {/* Person Container / Inner Container */}
      <div
        className={`
          clip-path
          duration-350
          relative
          flex
          aspect-[1/1.4]
          items-end
          overflow-hidden
          bg-red-500
          transition-transform
          ease-in-out
          hover:scale-[1.1]
        `}
      >
        {/* <div
          className={`
            absolute
            bottom-0
            left-0
            right-0
            top-auto
            aspect-square
            w-full
            -rotate-[2.5deg]
            rounded-[var(--s)]
            border-2
            border-[var(--neutral-90)]
          `}
        /> */}

        {/* Circle / Image 1 */}
        <div
          className={`
            absolute
            bottom-[4px]
            left-[4px]
            right-0
            top-auto
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
            duration-350
            group-hover:scale-140
            absolute
            bottom-[10px]
            left-[-20px]
            z-10
            scale-[2]
            transition-transform
            ease-in-out
            group-hover:-translate-y-4
          `}
          src={Photo}
          alt="Photo"
        />
      </div>
    </div>
  );
};

export default PhotoCardHero;
