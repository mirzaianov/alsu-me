import LogosRow from './LogosRow';

const InfiniteLogos = () => {
  return (
    <div
      id="infinite-logos"
      className={`animate-logos-fade-in group relative mt-[var(--l)] w-full overflow-hidden whitespace-nowrap bg-secondary-15 px-0 py-[var(--s)] leading-normal`}
    >
      <LogosRow />
      <LogosRow />
    </div>
  );
};

export default InfiniteLogos;
