import propTypes from 'prop-types';

const Note = ({ type, children }) => {
  const role = type === 'translator' ? 'bg-primary-20' : 'bg-primary-40';

  return (
    <div
      className={`block rounded-[var(--s)] p-[var(--xs)] text-center desktop:p-[var(--s)] desktop:text-body-l ${role}`}
    >
      {children}
    </div>
  );
};

Note.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string,
};

export default Note;
