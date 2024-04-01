import propTypes from 'prop-types';
import logo from '../assets/icons/logo.svg';

const Logo2 = ({ height = 'var(--body)' }) => {
  return (
    <img
      style={{ height: `var(${height})` }}
      src={logo}
      alt="Logo"
    />
  );
};

Logo2.propTypes = {
  height: propTypes.string,
};

export default Logo2;
