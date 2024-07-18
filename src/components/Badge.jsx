import propTypes from 'prop-types';

const Badge = ({
  icon,
  type,
  alt,
  text = '',
  size = '',
  isReversed = false,
  isAnimated = false,
}) => {
  const isLarge =
    size === 'large'
      ? 'h-[52px] text-body-l gap-[var(--s)]'
      : 'h-[var(--xl)] text-body gap-[var(--xs)]';

  const isType = () => {
    switch (type) {
      case 'secondary-15':
        return `bg-secondary-15 text-text-90`;
      case 'secondary-25':
        return `bg-secondary-25 text-text-90`;
      case 'secondary-35':
        return `bg-secondary-35 text-text-90`;
      case 'secondary-45':
        return `bg-secondary-45 text-text-90`;
      case 'secondary-55':
        return `bg-secondary-55 text-text-90`;
      default:
        return `bg-primary-10 text-text-0`;
    }
  };

  return (
    <div
      className={`shadow-primary flex w-fit cursor-default items-center justify-center rounded-lg px-[var(--s)] py-[var(--xs)] text-body font-bold leading-normal tracking-[0.05em] ${isType()} ${isReversed ? 'flex-row-reverse' : ''} ${isLarge}`}
      style={{}}
    >
      <img
        className={`${isAnimated ? 'animate-waving-hand' : ''} ${size === 'large' ? 'h-[var(--m)]' : 'h-[var(--s)] self-center'}`}
        src={icon}
        alt={alt}
      />
      {text}
    </div>
  );
};

Badge.propTypes = {
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  text: propTypes.string,
  type: propTypes.string,
  size: propTypes.string,
  isReversed: propTypes.bool,
  isAnimated: propTypes.bool,
};

export default Badge;
