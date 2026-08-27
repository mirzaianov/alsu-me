import { clsx } from 'clsx';
import Divider from '../../shared/ui/divider/divider';
import BrandLogo from '../../shared/ui/brand-logo/brand-logo';
import SiteNav from '../site-nav/site-nav';
import { footerContent } from '../../content/ru/footer';
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
            <p className={styles.name}>{footerContent.name}</p>
            <p className={styles.description}>{footerContent.description}</p>
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
            <p>{footerContent.copyright}</p>
            <p>|</p>
            <p>{footerContent.rights}</p>
          </div>
          <div className={clsx('cluster', styles.credit)}>
            <p>{footerContent.creditLabel}</p>
            <p>|</p>
            <a
              aria-label={footerContent.credit.ariaLabel}
              href={footerContent.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {footerContent.credit.text}
              <span className={styles.linkUnderline} />
            </a>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default SiteFooter;
