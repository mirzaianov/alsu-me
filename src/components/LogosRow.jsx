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
    <div className="group-hover:pause inline-block w-max animate-slides tablet:animate-slides-tablet">
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={kamaz}
        alt="Kamaz"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={knorr}
        alt="Knorr-Bremse AG"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={bendix}
        alt="Bendix Commercial Vehicle Systems"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={amis}
        alt="Amis Group"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={ishi}
        alt="Charles Ischi AG"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={inn}
        alt="Holiday Inn Hotels"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={akulchev}
        alt="Akulchev Waffles"
        loading="lazy"
      />
      <img
        className="my-0 inline-block h-[var(--m)] px-[20px] tablet:h-[var(--xl)] tablet:px-[var(--xl)] desktop:h-[var(--2xl)] desktop:px-[var(--2xl)]"
        src={tempo}
        alt="Tempo"
        loading="lazy"
      />
    </div>
  );
};

export default LogosRow;
