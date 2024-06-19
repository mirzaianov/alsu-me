import propTypes from 'prop-types';

const Hamburger = ({ onClick, isDropdownOpen }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      aria-label={`${isDropdownOpen ? 'Close hamburger menu' : 'Open hamburger menu'}`}
      onClick={handleClick}
      type="button"
    >
      <svg
        className={`ham hamRotate ham4 ${isDropdownOpen ? 'active' : ''}`}
        viewBox="17 17 65 65"
        width="40"
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path
          className="line middle"
          d="m 70,50 h -40"
        />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </button>
  );
};

Hamburger.propTypes = {
  onClick: propTypes.func.isRequired,
  isDropdownOpen: propTypes.bool.isRequired,
};

export default Hamburger;
