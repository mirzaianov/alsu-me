import propTypes from 'prop-types';

const style = {
  title: `text-center bg-gradient-to-br from-[var(--primary-30)] via-[var(--primary-20)] to-[var(--primary-10)] text-transparent bg-clip-text text-red`,
};

const Logo = ({ size }) => {
  return (
    <div
      className={style.title}
      style={{ fontSize: `var(${size})`, fontFamily: `Dela Gothic One` }}
    >
      alsu.
    </div>
  );
};

Logo.propTypes = {
  text: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
};

export default Logo;
