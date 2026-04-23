import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './Button.module.css';

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
      className={clsx(
        styles.button,
        styles[type || 'primary'],
        size === 'large' && styles.large,
        icon === 'true' && styles.icon,
      )}
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
