import Divider from './Divider';
import Logo from './Logo';
import Navbar from './NavBar';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="m-[var(--xl)] flex w-full max-w-[var(--container-mobile)] scroll-mt-36 flex-col items-start gap-[var(--m)] px-[var(--s)] tablet:max-w-full  tablet:gap-[var(--xl)] tablet:px-[var(--xl)]"
    >
      <article className="flex flex-col items-start gap-[var(--l)] tablet:flex-row">
        <Logo />
        <div className="flex flex-col justify-start gap-[var(--l)]">
          <div className="flex flex-col justify-start gap-[var(--l)]">
            <div className="flex flex-col justify-start gap-[var(--s)]">
              <p className="text-heading-s">Алсу Каримова</p>
              <p>
                Дипломированный преподаватель и переводчик английского и
                немецкого языков с многолетним опытом профессиональной
                деятельности в международных компаниях России и США
              </p>
            </div>
            <Navbar type="block-2" />
          </div>
        </div>
      </article>
      <article className="flex w-full flex-col justify-start gap-[var(--l)]">
        <Divider />
        <div className="flex flex-wrap justify-between gap-[var(--s)]">
          <div className="flex flex-wrap justify-start gap-[var(--2xs)]">
            <p>©️ 2024 Алсу Каримова</p>
            <p>|</p>
            <p>Все права защищены</p>
          </div>
          <div className="flex flex-wrap justify-start gap-[var(--2xs)]">
            <p>Дизайн и разработка</p>
            <p>|</p>
            <a
              href="https://cv.mirzaianov.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block text-text-10"
            >
              mirzaianov
              <span
                className="absolute bottom-[3px] left-0 right-0 h-[2px] scale-x-0 rounded-sm bg-primary-10 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                style={{
                  transformOrigin: 'left',
                  marginLeft: '-0.15rem',
                  marginRight: '-0.15rem',
                  width: 'calc(100% + 0.3rem)',
                }}
              />
            </a>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
