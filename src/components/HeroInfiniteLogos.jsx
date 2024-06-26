import HeroInfiniteLogosRow from './HeroInfiniteLogosRow';

const HeroInfiniteLogos = () => {
  return (
    <section
      id="infinite-logos"
      className="group relative mb-[var(--s)] w-full animate-logos-fade-in overflow-clip whitespace-nowrap bg-secondary-15 px-0 py-[var(--s)] leading-normal
                  tablet:mb-[var(--xl)] tablet:py-[var(--m)]
                  desktop:py-[var(--xl)]"
    >
      <HeroInfiniteLogosRow />
      <HeroInfiniteLogosRow />
    </section>
  );
};

export default HeroInfiniteLogos;
