import Divider from './Divider';
import Logo from './Logo';
import Navbar from './NavBar';

const Footer = () => {
  return (
    <footer
      id="footer"
      className={`mb-[var(--xl)] flex w-full max-w-[var(--container-mobile)] flex-col justify-start gap-[var(--l)] px-[var(--s)]`}
    >
      <article className={`flex flex-col justify-start gap-[var(--l)]`}>
        <div>
          <Logo />
        </div>
        <div className={`flex flex-col justify-start gap-[var(--l)]`}>
          <div className={`flex flex-col justify-start gap-[var(--s)]`}>
            <p className={`text-heading-s`}>Алсу Каримова</p>
            <p>
              Дипломированный преподаватель и переводчик английского и немецкого
              языков с многолетним опытом профессиональной деятельности в
              международных компаниях России и США
            </p>
          </div>
          <Navbar type="block-2" />
        </div>
      </article>
      <Divider />
      <article className={`flex flex-wrap justify-between gap-[var(--s)]`}>
        <div className={`flex flex-wrap justify-start gap-[var(--2xs)]`}>
          <p>©️ 2024 Алсу Каримова</p>
          <p>|</p>
          <p>Все права защищены</p>
        </div>
        <div className={`flex flex-wrap justify-start gap-[var(--2xs)]`}>
          <p>Дизайн и разработка</p>
          <p>|</p>
          <a
            href="#"
            className={`text-[var(--text-20)]`}
          >
            mirzaianov
          </a>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
