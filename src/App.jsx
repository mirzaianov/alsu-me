import { useState, useEffect } from 'react';
import About from './components/About';
import BackToTopButton from './components/BackToTopButton';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Prices from './components/Prices';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

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
      <About width={windowWidth} />
      <Services />
      <Prices />
      <Testimonials />
      <Contacts width={windowWidth} />
      <Footer width={windowWidth} />
      <BackToTopButton />
    </div>
  );
};

export default App;
