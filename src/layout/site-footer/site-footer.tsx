import { clsx } from 'clsx';
import Divider from '../../shared/ui/divider/divider';
import BrandLogo from '../../shared/ui/brand-logo/brand-logo';
import SiteNav from '../site-nav/site-nav';
import styles from './site-footer.module.css';

const SiteFooter = () => {
  return (
    <footer
      id="footer"
      className={clsx('section', styles.footer)}
    >
      <article className={styles.top}>
        <BrandLogo />
        <div className={styles.about}>
          <div className={styles.summary}>
            <p className={styles.name}>Алсу Каримова</p>
            <p className={styles.description}>
              Дипломированный преподаватель и переводчик английского с
              многолетним опытом профессиональной деятельности в международных
              компаниях
            </p>
          </div>
          <div className={styles.nav}>
            <div className={styles.navDesktop}>
              <SiteNav type="block-3" />
            </div>
            <div className={styles.navMobile}>
              <SiteNav type="block-2" />
            </div>
          </div>
        </div>
      </article>
      <article className={clsx('stack', styles.bottom)}>
        <Divider />
        <div className={styles.meta}>
          <div className={clsx('cluster', styles.copy)}>
            <p>©️ 2026 Алсу Каримова</p>
            <p>|</p>
            <p>Все права защищены</p>
          </div>
          <div className={clsx('cluster', styles.credit)}>
            <p>Дизайн и разработка</p>
            <p>|</p>
            <a
              aria-label="Visit the CV site of Riaz Mirzaianov"
              href="https://www.mirzaianov.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              mirzaianov
              <span className={styles.linkUnderline} />
            </a>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default SiteFooter;
