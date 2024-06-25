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
        className={`group relative flex items-center justify-center overflow-hidden rounded-lg bg-primary-10 py-[var(--xs)] tracking-[0.05em] transition duration-300 hover:scale-105 active:-translate-y-1 ${isLarge} w-fit`}
      >
        <div
          className="transintion absolute inset-0 m-auto size-16 animate-shape-2 rounded-full bg-primary-20
                      blur duration-500 group-hover:bg-primary-30 desktop:size-20 desktop:blur-md"
        ></div>
        <div
          className="transintion  absolute inset-0 m-auto size-16 animate-shape-1 rounded-full bg-primary-30
                      blur duration-500 group-hover:bg-primary-40 desktop:size-20 desktop:blur-md"
        ></div>
        <div
          className="transintion absolute inset-0 m-auto size-16 animate-shape-3 rounded-full bg-primary-40
                      blur duration-500 group-hover:bg-primary-20 desktop:size-20 desktop:blur-md"
        ></div>
        <span className="relative z-10 text-text-0">{text}</span>
      </div>
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
