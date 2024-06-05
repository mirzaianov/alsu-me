import propTypes from 'prop-types';
import logo from '../assets/icons/logo.svg';

const Logo = () => {
  return (
    <img
      className={`h-[var(--m)] w-auto tablet:h-[var(--xl)] desktop:h-[var(--2xl)]`}
      src={logo}
      alt="Logo"
    />
  );
};

Logo.propTypes = {
  size: propTypes.string,
};

export default Logo;
