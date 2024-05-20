import Kamaz from '../assets/img/logo-kamaz.svg';
import Knorr from '../assets/img/logo-kb.svg';
import Tempo from '../assets/img/logo-tempo.svg';

const LogosRow = () => {
  return (
    <div className={`group-hover:pause inline-block w-max animate-slides`}>
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
  );
};

export default LogosRow;
