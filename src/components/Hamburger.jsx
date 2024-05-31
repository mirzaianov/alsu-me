import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
// import hamburger from '../assets/icons/hamburger.svg';

const Hamburger = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(!isClicked);
    // onClick();
  };

  return (
    <button onClick={handleClick}>
      <svg
        className={`ham hamRotate ham4 ${isClicked ? 'active' : ''}`}
        viewBox="17.5 17.5 65 65"
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
  onClick: propTypes.func,
};

export default Hamburger;
