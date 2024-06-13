import propTypes from 'prop-types';
import logo from '../assets/icons/logo.svg';

const Logo = () => {
  return (
    <img
      className="h-[var(--m)] w-auto tablet:h-[var(--xl)]"
      src={logo}
      alt="Logo"
      loading="lazy"
    />
  );
};

Logo.propTypes = {
  size: propTypes.string,
};

export default Logo;
