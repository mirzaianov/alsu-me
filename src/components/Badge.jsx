import propTypes from 'prop-types';

const Badge = ({
  text = '',
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
      className={`flex w-fit cursor-default content-center justify-center gap-[var(--xs)] rounded-lg px-[var(--s)] py-[var(--xs)] text-body font-bold leading-normal tracking-[0.05em] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] ${isType()} ${isReversed ? 'flex-row-reverse' : ''} ${isLarge}`}
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
  icon: propTypes.string.isRequired,
  text: propTypes.string,
  type: propTypes.string,
  size: propTypes.string,
  isReversed: propTypes.bool,
  isAnimated: propTypes.bool,
};

export default Badge;
