'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ClientLogo from './client-logo';
import kamaz from '../../assets/icons/logos/logo-kamaz.svg';
import knorr from '../../assets/icons/logos/logo-knorr.svg';
import bendix from '../../assets/icons/logos/logo-bendix.svg';
import amis from '../../assets/icons/logos/logo-amis.svg';
import ischi from '../../assets/icons/logos/logo-ischi.svg';
import inn from '../../assets/icons/logos/logo-inn.svg';
import akulchev from '../../assets/icons/logos/logo-akulchev.svg';
import tempo from '../../assets/icons/logos/logo-tempo.svg';
import styles from './logo-marquee.module.css';

const logos = [
  {
    alt: 'Камский автомобильный завод ПАО «КАМАЗ»',
    src: kamaz,
  },
  {
    alt: 'Knorr-Bremse AG',
    src: knorr,
  },
  {
    alt: 'Bendix Commercial Vehicle Systems',
    src: bendix,
  },
  {
    alt: 'Amis Group',
    src: amis,
  },
  {
    alt: 'Charles Ischi AG',
    src: ischi,
  },
  {
    alt: 'Holiday Inn Hotels',
    src: inn,
  },
  {
    alt: 'Акульчев',
    src: akulchev,
  },
  {
    alt: 'Камский металлургический комбинат «ТЭМПО»',
    src: tempo,
  },
];

const mobileAndTabletPixelsPerSecond = 35;
const desktopPixelsPerSecond = 50;
const visualLogoSetCount = 3;

gsap.registerPlugin(useGSAP);

const LogoMarquee = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const items = gsap.utils.toArray<HTMLElement>(
        `[data-logo-marquee-item]`,
        track,
      );

      if (items.length === 0) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          isDesktop: '(min-width: 1061px)',
          isMobileOrTablet: '(max-width: 1060px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          gsap.set(items, { x: 0, xPercent: 0 });

          if (reduceMotion) {
            return;
          }

          const pixelsPerSecond = isDesktop
            ? desktopPixelsPerSecond
            : mobileAndTabletPixelsPerSecond;

          const widths: number[] = [];
          const xPercents: number[] = [];
          const startX = items[0].offsetLeft;
          const snap = gsap.utils.snap(1);

          gsap.set(items, {
            xPercent: (index, item) => {
              const width = (widths[index] = parseFloat(
                gsap.getProperty(item, 'width', 'px') as string,
              ));
              const x = parseFloat(gsap.getProperty(item, 'x', 'px') as string);
              const xPercent = gsap.getProperty(item, 'xPercent') as number;

              xPercents[index] = snap((x / width) * 100 + xPercent);

              return xPercents[index];
            },
          });
          gsap.set(items, { x: 0 });

          const lastItem = items[items.length - 1];
          const totalWidth =
            lastItem.offsetLeft +
            (xPercents[items.length - 1] / 100) * widths[items.length - 1] -
            startX +
            lastItem.offsetWidth *
              (gsap.getProperty(lastItem, 'scaleX') as number);

          const timeline = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'none' },
          });

          items.forEach((item, index) => {
            const currentX = (xPercents[index] / 100) * widths[index];
            const distanceToStart = item.offsetLeft + currentX - startX;
            const distanceToLoop =
              distanceToStart +
              widths[index] * (gsap.getProperty(item, 'scaleX') as number);

            timeline
              .to(
                item,
                {
                  duration: distanceToLoop / pixelsPerSecond,
                  xPercent: snap(
                    ((currentX - distanceToLoop) / widths[index]) * 100,
                  ),
                },
                0,
              )
              .fromTo(
                item,
                {
                  xPercent: snap(
                    ((currentX - distanceToLoop + totalWidth) / widths[index]) *
                      100,
                  ),
                },
                {
                  duration:
                    (currentX - distanceToLoop + totalWidth - currentX) /
                    pixelsPerSecond,
                  immediateRender: false,
                  xPercent: xPercents[index],
                },
                distanceToLoop / pixelsPerSecond,
              );
          });

          timeline.progress(1, true).progress(0, true);
        },
        track,
      );

      return () => {
        media.revert();
      };
    },
    { scope: trackRef },
  );

  return (
    <section
      id="infinite-logos"
      className={styles.heroInfiniteLogos}
    >
      <div
        ref={trackRef}
        className={styles.track}
      >
        {Array.from({ length: visualLogoSetCount }, (_, setIndex) =>
          logos.map((logo) => {
            const isDuplicateSet = setIndex > 0;

            return (
              <div
                key={`${setIndex}-${logo.alt}`}
                className={styles.item}
                aria-hidden={isDuplicateSet ? true : undefined}
                data-logo-marquee-item
              >
                <ClientLogo
                  alt={isDuplicateSet ? '' : logo.alt}
                  src={logo.src}
                />
              </div>
            );
          }),
        )}
      </div>
    </section>
  );
};

export default LogoMarquee;
