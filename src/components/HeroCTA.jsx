import propTypes from 'prop-types';

const HeroCTA = ({ size = '', link = '', ariaLabel, text }) => {
  const isLarge =
    size === 'large'
      ? 'h-[52px] px-[var(--m)] text-button-l gap-[var(--s)]'
      : 'h-[var(--xl)] px-[var(--s)] text-button gap-[var(--xs)]';

  return (
    <a
      href={link}
      className="relative"
      aria-label={ariaLabel}
    >
      <div
        className={`group relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-90 py-[var(--xs)] tracking-[0.05em] transition duration-300 active:-translate-y-1 ${isLarge} w-fit`}
      >
        <span className="relative z-10 text-text-0">{text}</span>
        <div
          className="animate-shape-1  absolute inset-0 m-auto size-20 rounded-full bg-primary-30 blur
                        desktop:size-28"
        ></div>
        <div
          className="animate-shape-2 absolute inset-0 m-auto size-20 rounded-full bg-primary-20 blur
                        desktop:size-28"
        ></div>
        <div
          className="animate-shape-3 absolute inset-0 m-auto size-20 translate-x-[75%] translate-y-[15%] rounded-full bg-primary-10 blur
                        desktop:size-28"
        ></div>
      </div>

      <div className="button__shadow"></div>
    </a>
  );
};

HeroCTA.propTypes = {
  text: propTypes.string.isRequired,
  ariaLabel: propTypes.string.isRequired,
  size: propTypes.string,
  link: propTypes.string,
};

export default HeroCTA;
