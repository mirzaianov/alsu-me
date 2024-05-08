import Kamaz from '../assets/img/logo-kamaz.svg';
import Knorr from '../assets/img/logo-kb.svg';
import Tempo from '../assets/img/logo-tempo.svg';

const InfiniteLogos = () => {
  return (
    <div
      className={`relative mt-[var(--l)] w-full overflow-hidden whitespace-nowrap bg-[var(--secondary-05)] px-0 py-[var(--s)] leading-normal`}
    >
      <div className={`animate-slides inline-block w-max`}>
        <img
          className={`mx-[20px] my-0 inline-block h-[var(--m)]`}
          src={Kamaz}
          alt="Kamaz"
        />
        <img
          className={`mx-[20px] my-0 inline-block h-[var(--m)]`}
          src={Knorr}
          alt="Knorr"
        />
        <img
          className={`mx-[20px] my-0 inline-block h-[var(--m)]`}
          src={Tempo}
          alt="Tempo"
        />
      </div>
      <div className={`animate-slides inline-block w-max`}>
        <img
          className={`mx-[20px] my-0 inline-block h-[var(--m)]`}
          src={Kamaz}
          alt="Kamaz"
        />
        <img
          className={`mx-[20px] my-0 inline-block h-[var(--m)]`}
          src={Knorr}
          alt="Knorr"
        />
        <img
          className={`mx-[20px] my-0 inline-block h-[var(--m)]`}
          src={Tempo}
          alt="Tempo"
        />
      </div>
    </div>
  );
};

export default InfiniteLogos;
