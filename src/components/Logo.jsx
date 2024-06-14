import propTypes from 'prop-types';
import logo from '../assets/icons/logo.svg';

const Logo = () => {
  return (
    <a href="#">
      <img
        className="h-[var(--m)] tablet:h-[var(--xl)]"
        src={logo}
        alt="Logo"
        loading="lazy"
      />
    </a>
  );
};

Logo.propTypes = {
  size: propTypes.string,
};

export default Logo;
