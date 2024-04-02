import propTypes from 'prop-types';
import hamburger from '../assets/icons/hamburger.svg';

const Hamburger = () => {
  return (
    <button>
      <img
        className="h-[var(--xl)]"
        src={hamburger}
        alt="close"
      />
    </button>
  );
};

Hamburger.propTypes = {
  size: propTypes.string,
};

export default Hamburger;
