'use client';

import { RoughNotation } from 'react-rough-notation';
import Actions from './actions';
import styles from './hero.module.css';

const HeroCta = () => {
  return (
    <article className={styles.ctaBlock}>
      <p className={styles.ctaTextMobile}>
        Запишись на{' '}
        <RoughNotation
          type="underline"
          show={true}
          color="var(--primary-30)"
          animationDelay={2000}
          strokeWidth={3}
          animationDuration={2000}
        >
          бесплатное
        </RoughNotation>{' '}
        занятие
      </p>
      <p className={styles.ctaTextDesktop}>
        Запишись на{' '}
        <RoughNotation
          type="underline"
          show={true}
          color="var(--primary-30)"
          animationDelay={2000}
          strokeWidth={4}
          animationDuration={2000}
        >
          бесплатное
        </RoughNotation>{' '}
        пробное занятие
      </p>
      <Actions
        text="Записаться"
        ariaLabel="Записаться"
        size="large"
        link="https://t.me/sue_onlineenglish"
      />
    </article>
  );
};

export default HeroCta;
