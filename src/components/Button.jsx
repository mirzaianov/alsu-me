import propTypes from 'prop-types';

const Button = ({
  children,
  ariaLabel,
  text = '',
  icon = '',
  size = '',
  type = '',
  onClick = null,
  link = '',
}) => {
  const isIcon =
    icon === 'true' ? 'min-w-[160px] desktop:min-w-[220px]' : 'w-fit';
  const isLarge =
    size === 'large'
      ? 'h-[52px] px-[var(--m)] text-button-l gap-[var(--s)]'
      : 'h-[var(--xl)] px-[var(--s)] text-button gap-[var(--xs)]';

  const isType = () => {
    switch (type) {
      case 'secondary':
        return `bg-transparent border-[3px] border-primary-10 hover:border-primary-10/70 text-text-10 hover:text-text-10/70`;
      case 'inverse':
        return `bg-neutral-0 hover:text-text-10/70 text-text-10`;
      case 'accent':
        return `bg-primary-30 hover:bg-primary-30/70 text-text-0`;
      case 'neutral':
        return `bg-transparent border-[3px] border-neutral-90 hover:border-neutral-90/70 hover:text-text-90/70`;
      default:
        return `bg-primary-10 hover:bg-primary-10/70 text-text-0`;
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (text === 'Email') {
      window.open(`mailto:${link}`, '_blank');
      return;
    }

    window.open(link, '_blank');
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`group flex items-center justify-center rounded-lg py-[var(--xs)] tracking-[0.05em] transition duration-300 active:-translate-y-1 ${isLarge} ${isIcon} ${isType()} w-fit`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.object, propTypes.array]),
  ariaLabel: propTypes.string.isRequired,
  text: propTypes.string,
  icon: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
  link: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
