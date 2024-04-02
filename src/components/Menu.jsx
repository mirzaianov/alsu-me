import propTypes from 'prop-types';

const items = ['Главная', 'Обо мне', 'Услуги', 'Цены', 'Отзывы', 'Контакты'];

const Menu = ({ type = 'inline' }) => {
  let ULstyle = {
    justifyContent: 'space-between',
    paddingInline: 'var(--l)',
    minWidth: '460px',
    maxWidth: '640px',
  };

  let LIstyle = {};

  if (type !== 'inline') {
    ULstyle = {
      flexDirection: 'column',
      flexWrap: 'wrap',
      gapColumn: 'var(--l)',
      height: '150px',
    };

    if (type === 'block-2') {
      LIstyle = {
        flex: '0 0 33%',
      };
    }

    if (type === 'block-3') {
      LIstyle = {
        flex: '0 0 50%',
      };
    }
  }

  console.log(ULstyle);

  return (
    <ul
      className="
        text-body-bold
        flex
      "
      style={{ ...ULstyle }}
    >
      {items.map((item) => (
        <li
          style={{ ...LIstyle }}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  type: propTypes.string,
};

export default Menu;
