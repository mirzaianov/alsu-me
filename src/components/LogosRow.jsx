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
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={kamaz}
        alt="Kamaz"
      />
      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={knorr}
        alt="Knorr-Bremse AG"
      />
      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={bendix}
        alt="Bendix Commercial Vehicle Systems"
      />
      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={amis}
        alt="Amis Group"
      />
      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={ishi}
        alt="Charles Ischi AG"
      />
      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={inn}
        alt="Holiday Inn Hotels"
      />
      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={akulchev}
        alt="Akulchev Waffles"
      />

      <img
        className="mx-[20px] my-0 inline-block h-[var(--m)] tablet:mx-[var(--xl)] tablet:h-[var(--xl)]"
        src={tempo}
        alt="Tempo"
      />
    </div>
  );
};

export default LogosRow;
