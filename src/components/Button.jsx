import propTypes from 'prop-types';

const Button = ({
  children,
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
      case 'secondary': {
        const bgColor = `transparent`;
        const borderColor = `primary-10`;
        const textColor = `text-10`;

        return `bg-${bgColor} border-[3px] border-${borderColor} hover:border-${borderColor}/70 text-${textColor} hover:text-${textColor}/70`;
      }
      case 'inverse': {
        const borderColor = `neutral-0`;
        const textColor = `text-10`;

        return `bg-${borderColor} hover:text-${textColor}/70 text-${textColor}`;
      }
      case 'accent': {
        const bgColor = `primary-30`;
        const textColor = `text-0`;

        return `bg-${bgColor} hover:bg-${bgColor}/70 text-${textColor}`;
      }
      case 'neutral': {
        const bgColor = `transparent`;
        const borderColor = `neutral-90`;
        const textColor = `text-90`;

        return `bg-${bgColor} border-[3px] border-${borderColor} hover:border-${borderColor}/70 hover:text-${textColor}/70`;
      }
      default: {
        const bgColor = `primary-10`;
        const textColor = `text-0`;

        return `bg-${bgColor} hover:bg-${bgColor}/70 text-${textColor}`;
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
  text: propTypes.string,
  icon: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
  link: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
