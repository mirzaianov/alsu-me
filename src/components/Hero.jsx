import Stat from './Stat';
import PhotoCard from './PhotoCardHero';

const Hero = () => {
  return (
    <section
      className={`
        align-center
        mx-auto
        flex
        flex-col
        justify-start
        gap-[var(--m)]
        px-[var(--s)]
        tablet:px-[var(--xl)]
        desktop:px-[var(--3xl)]`}
    >
      {/* Photo Block */}
      <article className={`align-center flex justify-start`}>
        {/* Stats Wrapper */}
        <div className={`align-center flex max-w-[160px] justify-center`}>
          {/* Stats container */}
          <ul
            className={`align-center flex w-[100px] flex-col justify-start gap-[var(--s)]`}
          >
            <Stat
              quantity="16+"
              text="лет опыта"
            />
            <Stat
              quantity="4+"
              text="года жизни в США"
            />
            <Stat
              quantity="200+"
              text="довольных учеников"
            />
          </ul>
        </div>
        {/* Photo Wrapper */}
        <div className={`align-center flex justify-center`}>
          {/* Photo container */}
          <div className={`align-center flex justify-start`}>
            <PhotoCard />
          </div>
        </div>
      </article>
      {/* Text Block */}
      <article className={`align-center flex flex-col justify-start`}>
        <div></div>
        <div></div>
        <div></div>
      </article>
    </section>
  );
};

export default Hero;
