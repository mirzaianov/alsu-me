import propTypes from 'prop-types';
import logo from '../assets/icons/logo.svg';

const Logo = ({ size = 'mobile' }) => {
  const style = {
    height: 'var(--m)',
  };

  if (size === 'desktop') {
    style.height = 'var(--2xl)';
  }

  if (size === 'tablet') {
    style.height = 'var(--xl)';
  }

  return (
    <img
      className="w-fit"
      style={{ height: style.height }}
      src={logo}
      alt="Logo"
    />
  );
};

Logo.propTypes = {
  size: propTypes.string,
};

export default Logo;
