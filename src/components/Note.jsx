import propTypes from 'prop-types';

const Note = ({ type, children }) => {
  const style = {
    backgroundColor: '',
  };

  if (type === 'tutor') {
    style.backgroundColor = 'var(--primary-20)';
  }

  if (type === 'translator') {
    style.backgroundColor = 'var(--primary-50)';
  }

  return (
    <div
      className={`desktop:text-body-l block max-w-[var(--card-width)] rounded-[var(--s)] p-[var(--xs)] text-center shadow-[5px_5px_25px_0px_rgba(0,0,0,0.25)] desktop:max-w-[365px] desktop:p-[var(--s)]`}
      style={{ backgroundColor: style.backgroundColor }}
    >
      {children}
    </div>
  );
};

Note.propTypes = {
  type: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Note;
