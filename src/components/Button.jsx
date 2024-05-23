import propTypes from 'prop-types';

const Button = ({
  text,
  icon = '',
  size = '',
  type = '',
  onClick = null,
  link = '',
}) => {
  const isIcon = icon ? 'gap-[var(--xs)] w-[160px]' : 'w-fit';
  const isLarge =
    size === 'large'
      ? 'h-[52px] px-[var(--m)] text-button-l'
      : 'h-[var(--xl)] px-[var(--s)] text-button';

  const isType = () => {
    switch (type) {
      case 'secondary':
        return `bg-transparent border-[3px] border-primary-10 hover:ring-2 hover:ring-primary-10 text-text-10`;
      case 'inverse':
        return `bg-neutral-0 hover:ring-2 hover:ring-neutral-0 text-text-10`;
      case 'accent':
        return `bg-primary-30 hover:ring-2 hover:ring-primary-30 text-text-0`;
      case 'neutral':
        return `bg-transparent border-[3px] border-neutral-70 hover:ring-2 hover:ring-neutral-70 text-text-70`;
      default: {
        return `bg-primary-10 hover:ring-2 hover:ring-primary-10 text-text-0`;
      }
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
      className={`flex items-center justify-center rounded-lg py-[var(--xs)] tracking-[0.05em] transition duration-300 ${isIcon} ${isLarge} ${isType()}`}
      type="button"
      onClick={handleClick}
    >
      {icon && (
        <img
          src={icon}
          alt={text}
        />
      )}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
  link: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
