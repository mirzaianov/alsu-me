import propTypes from 'prop-types';

const Stat = ({ quantity, text }) => {
  return (
    <li className="flex flex-col desktop:w-min desktop:min-w-[112px]">
      <p className="text-heading-s desktop:text-heading-m">{quantity}</p>
      <p className="text-body-tight desktop:text-body-l-tight">{text}</p>
    </li>
  );
};

Stat.propTypes = {
  quantity: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Stat;
