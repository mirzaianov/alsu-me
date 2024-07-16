import HeroInfiniteLogo from './HeroInfiniteLogo';
import kamaz from '../assets/icons/logos/logo-kamaz.svg';
import knorr from '../assets/icons/logos/logo-knorr.svg';
import bendix from '../assets/icons/logos/logo-bendix.svg';
import amis from '../assets/icons/logos/logo-amis.svg';
import ischi from '../assets/icons/logos/logo-ischi.svg';
import inn from '../assets/icons/logos/logo-inn.svg';
import akulchev from '../assets/icons/logos/logo-akulchev.svg';
import tempo from '../assets/icons/logos/logo-tempo.svg';

const HeroInfiniteLogosRow = () => {
  return (
    <div
      className="inline-block w-max animate-slides
                 tablet:animate-slides-tablet"
    >
      <HeroInfiniteLogo
        alt="Камский автомобильный завод ПАО «КАМАЗ»"
        src={kamaz}
      />
      <HeroInfiniteLogo
        alt="Knorr-Bremse AG"
        src={knorr}
      />
      <HeroInfiniteLogo
        alt="Bendix Commercial Vehicle Systems"
        src={bendix}
      />
      <HeroInfiniteLogo
        alt="Amis Group"
        src={amis}
      />
      <HeroInfiniteLogo
        alt="Charles Ischi AG"
        src={ischi}
      />
      <HeroInfiniteLogo
        alt="Holiday Inn Hotels"
        src={inn}
      />
      <HeroInfiniteLogo
        alt="Акульчев"
        src={akulchev}
      />
      <HeroInfiniteLogo
        alt="Камский металлургический комбинат «ТЭМПО»"
        src={tempo}
      />
    </div>
  );
};

export default HeroInfiniteLogosRow;
