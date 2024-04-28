import Kamaz from '../assets/img/logo-kamaz.svg';
import Knorr from '../assets/img/logo-kb.svg';
import Tempo from '../assets/img/logo-tempo.svg';

import styles from './Logos.module.css';

const Logos = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.logos__slide}>
        <img
          src={Kamaz}
          alt="Kamaz"
        />
        <img
          src={Knorr}
          alt="Knorr"
        />
        <img
          src={Tempo}
          alt="Tempo"
        />
      </div>
      <div className={styles.logos__slide}>
        <img
          src={Kamaz}
          alt="Kamaz"
        />
        <img
          src={Knorr}
          alt="Knorr"
        />
        <img
          src={Tempo}
          alt="Tempo"
        />
      </div>
    </div>
  );
};

export default Logos;
