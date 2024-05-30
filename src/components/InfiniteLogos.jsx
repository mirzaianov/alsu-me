import LogosRow from './LogosRow';

const InfiniteLogos = () => {
  return (
    <div
      id="infinite-logos"
      className={`group relative mt-[var(--l)] w-full animate-logos-fade-in overflow-clip whitespace-nowrap bg-secondary-15 px-0 py-[var(--s)] leading-normal`}
    >
      <LogosRow />
      <LogosRow />
    </div>
  );
};

export default InfiniteLogos;
