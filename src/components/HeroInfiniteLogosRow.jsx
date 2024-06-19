import HeroInfiniteLogo from './HeroInfiniteLogo';
import kamaz from '../assets/icons/logos/logo-kamaz.svg';
import knorr from '../assets/icons/logos/logo-knorr.svg';
import bendix from '../assets/icons/logos/logo-bendix.svg';
import amis from '../assets/icons/logos/logo-amis.svg';
import ishi from '../assets/icons/logos/logo-ishi.svg';
import inn from '../assets/icons/logos/logo-inn.svg';
import akulchev from '../assets/icons/logos/logo-akulchev.svg';
import tempo from '../assets/icons/logos/logo-tempo.svg';

const HeroInfiniteLogosRow = () => {
  return (
    <div
      className="group-hover:pause inline-block w-max animate-slides
                 tablet:animate-slides-tablet"
    >
      <HeroInfiniteLogo src={kamaz} />
      <HeroInfiniteLogo src={knorr} />
      <HeroInfiniteLogo src={bendix} />
      <HeroInfiniteLogo src={amis} />
      <HeroInfiniteLogo src={ishi} />
      <HeroInfiniteLogo src={inn} />
      <HeroInfiniteLogo src={akulchev} />
      <HeroInfiniteLogo src={tempo} />
    </div>
  );
};

export default HeroInfiniteLogosRow;
