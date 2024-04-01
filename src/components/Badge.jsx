import propTypes from 'prop-types';
import uk from '../assets/icons/uk.svg';
import usa from '../assets/icons/usa.svg';
import hand from '../assets/icons/hand.webp';

const Badge = ({ text, icon, backgroundColor, direction = 'row' }) => {
  const style = {
    flow: direction,
    iconPath: icon,
    backgroundColor: `var(${backgroundColor})`,
    color: `var(--text-90)`,
  };

  if (icon === 'uk') {
    style.iconPath = uk;
  }

  if (icon === 'usa') {
    style.iconPath = usa;
  }

  if (icon === 'hi') {
    style.iconPath = hand;
  }

  return (
    <div
      className="flex w-fit justify-center gap-[var(--xs)] rounded-lg px-[var(--s)] py-[var(--xs)] font-bold leading-normal tracking-[0.05em] shadow-md"
      style={{
        backgroundColor: `${style.backgroundColor}`,
        color: `${style.color}`,
        flexDirection: `${style.direction}`,
      }}
    >
      <img
        style={{ height: `${style.size}` }}
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
};

export default Badge;
