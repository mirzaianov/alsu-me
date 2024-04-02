import propTypes from 'prop-types';
import hamburger from '../assets/icons/hamburger.svg';

const Hamburger = ({ size = 'mobile' }) => {
  const style = {
    height: 'var(--m)',
  };

  if (size === 'tablet') {
    style.height = 'var(--xl)';
  }

  return (
    <button>
      <img
        style={{ height: style.height }}
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
