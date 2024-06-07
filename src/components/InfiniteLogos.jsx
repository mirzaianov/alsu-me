import LogosRow from './LogosRow';

const InfiniteLogos = () => {
  return (
    <div
      id="infinite-logos"
      className="desktop: group relative mb-[var(--s)] mt-[var(--l)] w-full animate-logos-fade-in overflow-clip whitespace-nowrap bg-secondary-15 px-0 py-[var(--s)] leading-normal
                  tablet:mb-[var(--xl)] tablet:mt-[var(--2xl)] tablet:py-[var(--m)]
                  desktop:py-[var(--xl)]"
    >
      <LogosRow />
      <LogosRow />
    </div>
  );
};

export default InfiniteLogos;
