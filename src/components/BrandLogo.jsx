import propTypes from 'prop-types';
import alsuLogo from '../assets/icons/alsu-logo.svg';

const BrandLogo = () => {
  return (
    <a
      className="tablet:shrink-0 tablet:grow desktop:grow-0"
      aria-label="Go to the top of the page"
      href="#"
    >
      <img
        className="h-[var(--m)] tablet:h-[var(--xl)]"
        src={alsuLogo}
        alt="BrandLogo"
      />
    </a>
  );
};

BrandLogo.propTypes = {
  size: propTypes.string,
};

export default BrandLogo;
