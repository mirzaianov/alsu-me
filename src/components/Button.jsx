import propTypes from 'prop-types';
import telegram from '../assets/icons/telegram.svg';
import email from '../assets/icons/email.svg';

const telegramLink = import.meta.env.VITE_TELEGRAM;
const emailLink = import.meta.env.VITE_EMAIL;

const Button = ({ text, icon = '', size = '', type = '', onClick = null }) => {
  const style = {
    width: 'fit-content',
    iconPath: icon,
    fontSize: ``,
    backgroundColor: `var(--primary-10)`,
    outlineColor: `var(--primary-10)`,
    color: `var(--text-00)`,
    xPadding: 'var(--s)',
    gap: '',
  };

  // set icon
  if (icon) {
    style.gap = 'var(--xs)';
    style.width = '160px';

    if (icon === 'telegram') {
      style.iconPath = telegram;
    }

    if (icon === 'email') {
      style.iconPath = email;
    }
  }

  // set size
  if (size === 'large') {
    style.fontSize = 'var(--button-l)';
    style.xPadding = 'var(--m)';
  }

  // set type
  if (type === 'secondary') {
    style.backgroundColor = 'transparent';
    style.color = 'var(--text-20)';
  }

  if (type === 'neutral') {
    style.backgroundColor = 'var(--neutral-00)';
    style.outlineColor = 'var(--neutral-00)';
    style.color = 'var(--text-90)';
  }

  if (type === 'accent') {
    style.backgroundColor = 'var(--primary-30)';
    style.outlineColor = 'var(--primary-30)';
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (text === 'Email') {
      window.open(`mailto:${emailLink}`, '_blank');
      return;
    }

    window.open(telegramLink, '_blank');
  };

  return (
    <button
      className="flex justify-center rounded-lg py-[var(--xs)] font-bold leading-normal tracking-[0.05em] outline outline-[3px] outline-offset-[-3px]"
      style={{
        width: style.width,
        gap: style.gap,
        paddingInline: style.xPadding,
        fontSize: style.fontSize,
        color: style.color,
        backgroundColor: style.backgroundColor,
        outlineColor: style.outlineColor,
      }}
      type="button"
      onClick={handleClick}
    >
      <img
        style={{ height: `${style.size}` }}
        src={style.iconPath}
        alt={style.iconPath && `${text}`}
      />
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
  text: propTypes.string.isRequired,
  icon: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
};

export default Button;
