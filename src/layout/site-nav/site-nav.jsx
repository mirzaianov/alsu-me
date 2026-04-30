import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { clsx } from 'clsx';
import styles from './site-nav.module.css';

const items = [
  ['hero', 'Главная'],
  ['about', 'Обо мне'],
  ['services', 'Услуги'],
  ['pricing', 'Цены'],
  ['testimonials', 'Отзывы'],
  ['contact', 'Контакты'],
];

const SiteNav = ({ type, setIsMenuOpen, isMenuOpen }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    items.forEach((item) => {
      const section = document.getElementById(item[0]);
      if (section) observer.observe(section);
    });

    return () => {
      items.forEach((item) => {
        const section = document.getElementById(item[0]);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (id) => {
    if (setIsMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }

    setActiveLink(id);
  };

  return (
    <ul className={clsx(styles.navBar, styles[type])}>
      {items.map((item) => (
        <li
          className={clsx(styles.item, styles[item[0]])}
          key={item[0]}
        >
          <a
            aria-label={`Go to the ${item[0]} section`}
            className={clsx(
              styles.link,
              activeLink === item[0] && styles.active,
            )}
            href={`#${item[0]}`}
            onClick={() => handleClick(item[0])}
          >
            {item[1]}
            <span
              className={clsx(
                styles.underline,
                activeLink === item[0] && styles.underlineActive,
              )}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

SiteNav.propTypes = {
  type: propTypes.string.isRequired,
  setIsMenuOpen: propTypes.func,
  isMenuOpen: propTypes.bool,
};

export default SiteNav;
