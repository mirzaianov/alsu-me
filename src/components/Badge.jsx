import propTypes from 'prop-types';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';
import hand from '../assets/icons/hand.svg';

const Badge = ({
  text,
  icon,
  backgroundColor,
  direction = 'row',
  size = '16px',
  isAnimated = false,
}) => {
  const style = {
    flow: direction,
    iconPath: icon,
    backgroundColor: `var(${backgroundColor})`,
    color: `var(--text-90)`,
    fontSize: `${size}`,
  };

  if (icon === 'uk') {
    style.iconPath = uk;
  }

  if (icon === 'usa') {
    style.iconPath = usa;
  }

  if (icon === 'hi') {
    style.iconPath = hand;
    style.direction = 'row-reverse';
  }

  if (backgroundColor === '--primary-10') {
    style.color = 'var(--neutral-00)';
  }

  return (
    <div
      className={`flex w-fit content-center justify-center gap-[var(--xs)] rounded-lg px-[var(--s)] py-[var(--xs)] font-bold leading-normal tracking-[0.05em] shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)]`}
      style={{
        backgroundColor: `${style.backgroundColor}`,
        color: `${style.color}`,
        flexDirection: `${style.direction}`,
        fontSize: `${style.fontSize}`,
      }}
    >
      <img
        className={`${isAnimated ? 'animate-waving-hand' : ''}`}
        style={{ height: style.fontSize, alignSelf: 'center' }}
        src={style.iconPath}
        alt={style.iconPath && `${text}`}
      />
      {text}
    </div>
  );
};

Badge.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  backgroundColor: propTypes.string.isRequired,
  direction: propTypes.string,
  size: propTypes.string,
  isAnimated: propTypes.bool,
};

export default Badge;
