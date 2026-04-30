import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from './layout/site-header/site-header';
import Hero from './sections/hero/hero';
import About from './sections/about/about';
import SiteFooter from './layout/site-footer/site-footer';
import BackToTop from './widgets/back-to-top/back-to-top';
import styles from './app.module.css';

const Services = lazy(() => import('./sections/services/services'));
const Pricing = lazy(() => import('./sections/pricing/pricing'));
const Testimonials = lazy(() => import('./sections/testimonials/testimonials'));
const Contact = lazy(() => import('./sections/contact/contact'));

const App = () => {
  return (
    <div
      id="app"
      className={styles.app}
    >
      <SiteHeader />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </Suspense>
      <SiteFooter />
      <BackToTop />
      {/* Vercel Analytics */}
      <Analytics />
      {/* End Vercel Analytics */}
    </div>
  );
};

export default App;
