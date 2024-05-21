import LogosRow from './LogosRow';

const InfiniteLogos = () => {
  return (
    <div
      id="infinite-logos"
      className={`group relative mt-[var(--l)] w-full overflow-hidden whitespace-nowrap bg-[var(--secondary-05)] px-0 py-[var(--s)] leading-normal`}
    >
      <LogosRow />
      <LogosRow />
    </div>
  );
};

export default InfiniteLogos;
