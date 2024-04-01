import propTypes from 'prop-types';
import hamburger from '../assets/icons/hamburger.svg';

const Hamburger = ({ size = '--m' }) => {
  return (
    <button>
      <img
        style={{ height: `var(${size})` }}
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
