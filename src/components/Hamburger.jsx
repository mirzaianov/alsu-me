import propTypes from 'prop-types';
import hamburger from '../assets/icons/hamburger.svg';

const Hamburger = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img
        className={`h-[var(--xl)]`}
        src={hamburger}
        alt="close"
      />
    </button>
  );
};

Hamburger.propTypes = {
  onClick: propTypes.func,
};

export default Hamburger;
