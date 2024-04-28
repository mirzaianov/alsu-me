import Hero from './Hero';

const Main = () => {
  return (
    <main
      className={`
        relative
        flex
        overflow-auto
      `}
    >
      <Hero />
    </main>
  );
};

export default Main;
