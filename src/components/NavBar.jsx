import propTypes from 'prop-types';

const items = [
  ['hero', 'Главная'],
  ['about', 'Обо мне'],
  ['services', 'Услуги'],
  ['prices', 'Цены'],
  ['testimonials', 'Отзывы'],
  ['contacts', 'Контакты'],
];

const Navbar = ({ type = '', setIsDropdownOpen, isDropdownOpen }) => {
  let ULstyle = {};
  let LIstyle = {};

  if (type === '') {
    return null;
  }

  if (type === 'inline') {
    ULstyle = {
      gridTemplateAreas: `
        'hero about services prices testimonials contacts'
      `,
      paddingInline: 'var(--l)',
      minWidth: '460px',
      maxWidth: '640px',
      // flex: '1 1 auto',
      margin: '0 auto',
    };

    LIstyle = {
      textAlign: 'center',
    };
  }

  if (type === 'block-2') {
    ULstyle = {
      gridTemplateAreas: `
      'hero services testimonials'
      'about prices contacts'
    `,
      gap: 'var(--l)',
      justifyContent: 'start',
    };

    LIstyle = {
      width: 'fit-content',
    };
  }

  if (type === 'block-3') {
    ULstyle = {
      gridTemplateAreas: `
      'hero prices'
      'about testimonials'
      'services contacts'
    `,
      gap: 'var(--l)',
      justifyContent: 'start',
    };

    LIstyle = {
      width: 'fit-content',
    };
  }

  const handleClick = () => {
    if (setIsDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <nav className="w-full">
      <ul
        className="
          grid
          text-body-bold
        "
        style={{ ...ULstyle }}
      >
        {items.map((item) => (
          <li
            style={{ ...LIstyle, gridArea: item[0] }}
            id={item[0]}
            key={item[0]}
            onClick={handleClick}
          >
            <a href={`#${item[0]}`}>{item[1]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  type: propTypes.string,
  setIsDropdownOpen: propTypes.func,
  isDropdownOpen: propTypes.bool,
};

export default Navbar;
