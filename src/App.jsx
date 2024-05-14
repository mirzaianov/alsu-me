// import Logo from './components/Logo';
// import Hamburger from './components/Hamburger';
// import Button from './components/Button';
// import Badge from './components/Badge';
// import Note from './components/Note';
// import Menu from './components/Menu';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import InfiniteLogos from './components/InfiniteLogos';
import Services from './components/Services';

const App = () => {
  return (
    <div
      className={`app relative flex flex-col items-center justify-start overflow-hidden`}
    >
      <Header />
      <Hero />
      <InfiniteLogos />
      <About />
      <Services />
      {/*
      <Button
        icon="telegram"
        text="Button"
      />
      <Button
        icon="email"
        text="Button"
        type="secondary"
      />
      <Button
        text="Button"
        size="large"
      />
      <Button
        text="Button"
        type="secondary"
        size="large"
      />
      <Badge
        text="Travel"
        icon="usa"
        backgroundColor={'--secondary-25'}
      />
      <Badge
        text="General"
        icon="uk"
        backgroundColor={'--secondary-05'}
      />
      <Badge
        text="Education"
        icon="uk"
        backgroundColor={'--secondary-05'}
      />
      <Badge
        text="Business"
        icon="usa"
        backgroundColor={'--secondary-25'}
      />
      <Menu />
      <Menu type="inline" />
      <Menu type="block-2" />
      <Menu type="block-3" />
      <NavBar /> */}
    </div>
  );
};

export default App;
