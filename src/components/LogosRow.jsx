import kamaz from '../assets/img/logo-kamaz.svg';
import knorr from '../assets/img/logo-knorr.svg';
import bendix from '../assets/img/logo-bendix.svg';
import amis from '../assets/img/logo-amis.svg';
import ishi from '../assets/img/logo-ishi.svg';
import inn from '../assets/img/logo-inn.svg';
import akulchev from '../assets/img/logo-akulchev.svg';
import tempo from '../assets/img/logo-tempo.svg';

const LogosRow = () => {
  return (
    <div className="group-hover:pause tablet:animate-slides-tablet inline-block w-max animate-slides">
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={kamaz}
        alt="Kamaz"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={knorr}
        alt="Knorr-Bremse AG"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={bendix}
        alt="Bendix Commercial Vehicle Systems"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={amis}
        alt="Amis Group"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={ishi}
        alt="Charles Ischi AG"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={inn}
        alt="Holiday Inn Hotels"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={akulchev}
        alt="Akulchev Waffles"
      />

      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)]"
        src={tempo}
        alt="Tempo"
      />
    </div>
  );
};

export default LogosRow;
