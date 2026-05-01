import MarqueeLogo from './marquee-logo';
import kamaz from '../../assets/icons/logos/logo-kamaz.svg';
import knorr from '../../assets/icons/logos/logo-knorr.svg';
import bendix from '../../assets/icons/logos/logo-bendix.svg';
import amis from '../../assets/icons/logos/logo-amis.svg';
import ischi from '../../assets/icons/logos/logo-ischi.svg';
import inn from '../../assets/icons/logos/logo-inn.svg';
import akulchev from '../../assets/icons/logos/logo-akulchev.svg';
import tempo from '../../assets/icons/logos/logo-tempo.svg';
import styles from './logo-marquee-row.module.css';

type LogoMarqueeRowProps = {
  isDuplicate?: boolean;
};

const LogoMarqueeRow = ({ isDuplicate = false }: LogoMarqueeRowProps) => {
  return (
    <div
      className={styles.heroInfiniteLogosRow}
      aria-hidden={isDuplicate || undefined}
    >
      <MarqueeLogo
        alt="Камский автомобильный завод ПАО «КАМАЗ»"
        src={kamaz}
      />
      <MarqueeLogo
        alt="Knorr-Bremse AG"
        src={knorr}
      />
      <MarqueeLogo
        alt="Bendix Commercial Vehicle Systems"
        src={bendix}
      />
      <MarqueeLogo
        alt="Amis Group"
        src={amis}
      />
      <MarqueeLogo
        alt="Charles Ischi AG"
        src={ischi}
      />
      <MarqueeLogo
        alt="Holiday Inn Hotels"
        src={inn}
      />
      <MarqueeLogo
        alt="Акульчев"
        src={akulchev}
      />
      <MarqueeLogo
        alt="Камский металлургический комбинат «ТЭМПО»"
        src={tempo}
      />
    </div>
  );
};

export default LogoMarqueeRow;
