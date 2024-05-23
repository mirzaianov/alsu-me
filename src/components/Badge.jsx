import propTypes from 'prop-types';

const Badge = ({
  text,
  icon,
  type,
  size = '',
  isReversed = false,
  isAnimated = false,
}) => {
  const isLarge =
    size === 'large' ? 'h-[52px] text-body-l' : 'h-[var(--xl)] text-body';

  const isType = () => {
    switch (type) {
      case 'secondary-45':
        return `bg-secondary-45 text-text-90`;
      case 'secondary-05':
        return `bg-secondary-05 text-text-90`;
      case 'secondary-25':
        return `bg-secondary-25 text-text-90`;
      default: {
        return `bg-primary-10 text-text-0`;
      }
    }
  };

  return (
    <div
      className={`text-body flex w-fit cursor-default content-center justify-center gap-[var(--xs)] rounded-lg px-[var(--s)] py-[var(--xs)] font-bold leading-normal tracking-[0.05em] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] ${isType()} ${isReversed ? 'flex-row-reverse' : ''} ${isLarge}`}
      style={{}}
    >
      <img
        className={`${isAnimated ? 'animate-waving-hand' : ''} h-[var(--s)] self-center`}
        src={icon}
        alt={icon && `${text}`}
      />
      {text}
    </div>
  );
};

Badge.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  isReversed: propTypes.bool,
  size: propTypes.string,
  isAnimated: propTypes.bool,
};

export default Badge;
