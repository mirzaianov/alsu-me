import propTypes from 'prop-types';

const HeroCTA = ({ size = '', link = '', ariaLabel, text }) => {
  const isLarge =
    size === 'large'
      ? 'h-[52px] px-[var(--m)] text-button-l gap-[var(--s)]'
      : 'h-[var(--xl)] px-[var(--s)] text-button gap-[var(--xs)]';

  return (
    <button
      className="group relative"
      aria-label={ariaLabel}
      onClick={() => window.open(link, '_blank')}
    >
      <div
        className={` relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-90 py-[var(--xs)] tracking-[0.05em] transition duration-300 active:-translate-y-1 ${isLarge} w-fit`}
      >
        <div
          className="animate-shape-1  absolute inset-0 m-auto size-20 rounded-full bg-primary-30 blur
          desktop:size-28 desktop:blur-md"
        ></div>
        <div
          className="animate-shape-2 absolute inset-0 m-auto size-20 rounded-full bg-primary-20 blur
          desktop:size-28 desktop:blur-md"
        ></div>
        <div
          className="animate-shape-3 absolute inset-0 m-auto size-20 translate-x-[75%] translate-y-[15%] rounded-full bg-primary-10 blur
          desktop:size-28 desktop:blur-md"
        ></div>
        <span className="relative z-10 text-text-0">{text}</span>
      </div>
      <div className="absolute inset-0 -z-10 size-full rounded-lg bg-gradient-to-r from-primary-30 from-10% via-primary-20 via-30% to-primary-10 to-90% opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
    </button>
  );
};

HeroCTA.propTypes = {
  text: propTypes.string.isRequired,
  ariaLabel: propTypes.string.isRequired,
  size: propTypes.string,
  link: propTypes.string,
};

export default HeroCTA;
