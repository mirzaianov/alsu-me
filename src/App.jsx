import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const LazyAbout = lazy(() => import('./components/About'));
const LazyBackToTopButton = lazy(() => import('./components/BackToTopButton'));
const LazyContacts = lazy(() => import('./components/Contacts'));
const LazyFooter = lazy(() => import('./components/Footer'));
const LazyPrices = lazy(() => import('./components/Prices'));
const LazyServices = lazy(() => import('./components/Services'));
const LazyTestimonials = lazy(() => import('./components/Testimonials'));

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="app"
      className="relative flex flex-col items-center justify-start overflow-clip
                 desktop:text-body-l"
    >
      <Header width={windowWidth} />
      <Hero width={windowWidth} />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAbout width={windowWidth} />
        <LazyServices />
        <LazyPrices />
        <LazyTestimonials />
        <LazyContacts width={windowWidth} />
        <LazyFooter width={windowWidth} />
        <LazyBackToTopButton width={windowWidth} />
      </Suspense>
    </div>
  );
};

export default App;
