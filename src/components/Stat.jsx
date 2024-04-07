import propTypes from 'prop-types';

const Stat = ({ quantity, text }) => {
  return (
    <li className="flex flex-col">
      <p className="text-heading-s">{quantity}</p>
      <p className="text-body-tight">{text}</p>
    </li>
  );
};

Stat.propTypes = {
  quantity: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Stat;
