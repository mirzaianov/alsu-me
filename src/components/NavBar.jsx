import propTypes from 'prop-types';

const NavBar = ({ type = 'mobile' }) => {
  return <nav>NavBar</nav>;
};

NavBar.propTypes = {
  type: propTypes.string,
};

export default NavBar;
