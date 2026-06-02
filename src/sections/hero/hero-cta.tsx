'use client';

import { RoughNotation } from 'react-rough-notation';
import HeroCtaButton from './hero-cta-button';
import { heroCtaContent } from '../../content/ru/hero';
import styles from './hero.module.css';

const HeroCta = () => {
  return (
    <article className={styles.ctaBlock}>
      <p className={styles.ctaTextMobile}>
        {heroCtaContent.mobile.prefix}{' '}
        <RoughNotation
          type="underline"
          show={true}
          color="var(--primary-30)"
          animationDelay={2000}
          strokeWidth={3}
          animationDuration={2000}
        >
          {heroCtaContent.mobile.highlight}
        </RoughNotation>{' '}
        {heroCtaContent.mobile.suffix}
      </p>
      <p className={styles.ctaTextDesktop}>
        {heroCtaContent.desktop.prefix}{' '}
        <RoughNotation
          type="underline"
          show={true}
          color="var(--primary-30)"
          animationDelay={2000}
          strokeWidth={4}
          animationDuration={2000}
        >
          {heroCtaContent.desktop.highlight}
        </RoughNotation>{' '}
        {heroCtaContent.desktop.suffix}
      </p>
      <HeroCtaButton
        text={heroCtaContent.action.text}
        ariaLabel={heroCtaContent.action.ariaLabel}
        size="large"
        link={heroCtaContent.action.link}
      />
    </article>
  );
};

export default HeroCta;
