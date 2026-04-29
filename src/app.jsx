import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/header/header';
import Hero from './components/sections/hero/hero';
import About from './components/sections/about/about';
import Footer from './components/layout/footer/footer';
import BackToTopButton from './components/ui/back-to-top-button/back-to-top-button';
import styles from './app.module.css';

const Services = lazy(() => import('./components/sections/services/services'));
const Prices = lazy(() => import('./components/sections/prices/prices'));
const Testimonials = lazy(
  () => import('./components/sections/testimonials/testimonials'),
);
const Contacts = lazy(() => import('./components/sections/contacts/contacts'));

const App = () => {
  return (
    <div
      id="app"
      className={styles.app}
    >
      <Header />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Services />
        <Prices />
        <Testimonials />
        <Contacts />
      </Suspense>
      <Footer />
      <BackToTopButton />
      {/* Vercel Analytics */}
      <Analytics />
      {/* End Vercel Analytics */}
    </div>
  );
};

export default App;
