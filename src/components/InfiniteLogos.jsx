import LogosRow from './LogosRow';

const InfiniteLogos = () => {
  return (
    <div
      id="infinite-logos"
      className={`bg-secondary-15 group relative mt-[var(--l)] w-full overflow-hidden whitespace-nowrap px-0 py-[var(--s)] leading-normal`}
    >
      <LogosRow />
      <LogosRow />
    </div>
  );
};

export default InfiniteLogos;
