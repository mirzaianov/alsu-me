import propTypes from 'prop-types';

const Note = ({ type, children }) => {
  const role = type === 'translator' ? 'bg-primary-20' : 'bg-primary-50';

  return (
    <div
      className={`block max-w-[var(--card-width)] rounded-[var(--s)] p-[var(--xs)] text-center shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] desktop:max-w-[365px] desktop:p-[var(--s)] desktop:text-body-l ${role}`}
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
