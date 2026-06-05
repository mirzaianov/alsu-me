import { clsx } from 'clsx';
import Button from '../../shared/ui/button/button';
import { DottedMap, type Marker } from '../../shared/ui/dotted-map/dotted-map';
import styles from './contact.module.css';

type ContactMapMarker = Marker & {
  label: string;
};

const contactMapMarkerColors = [
  'var(--primary-30)',
  'var(--primary-10)',
  'var(--primary-50)',
  'var(--primary-20)',
  'var(--primary-40)',
] as const;

const contactMapMarkers: ContactMapMarker[] = [
  { lat: 54.7388, lng: 55.9721, label: 'Уфа, Россия', size: 0.8 },
  { lat: 56.8527, lng: 53.2115, label: 'Ижевск, Россия', size: 0.8 },
  { lat: 55.7961, lng: 49.1064, label: 'Казань, Россия', size: 0.8 },
  { lat: 55.7436, lng: 52.3958, label: 'Набережные Челны, Россия', size: 0.8 },
  { lat: 55.7558, lng: 37.6173, label: 'Москва, Россия', size: 0.8 },
  { lat: 59.9311, lng: 30.3609, label: 'Санкт-Петербург, Россия', size: 0.8 },
  { lat: 47.6062, lng: -122.3321, label: 'Сиэтл, США', size: 0.8 },
  { lat: 25.7617, lng: -80.1918, label: 'Майами, США', size: 0.8 },
  { lat: 19.4326, lng: -99.1332, label: 'Мехико, Мексика', size: 0.8 },
  { lat: 41.0082, lng: 28.9784, label: 'Стамбул, Турция', size: 0.8 },
  { lat: 40.1885, lng: 29.061, label: 'Бурса, Турция', size: 0.8 },
  { lat: 41.7151, lng: 44.8271, label: 'Тбилиси, Грузия', size: 0.8 },
  { lat: 41.6168, lng: 41.6367, label: 'Батуми, Грузия', size: 0.8 },
  { lat: 44.7866, lng: 20.4489, label: 'Белград, Сербия', size: 0.8 },
  { lat: 45.0355, lng: 38.9753, label: 'Краснодар, Россия', size: 0.8 },
  { lat: 25.2048, lng: 55.2708, label: 'Дубай, ОАЭ', size: 0.8 },
  { lat: 32.8872, lng: 13.1913, label: 'Триполи, Ливия', size: 0.8 },
].map((marker, index) => ({
  ...marker,
  color: contactMapMarkerColors[index % contactMapMarkerColors.length],
}));

const Contact = () => {
  return (
    <section
      id="contact"
      className={clsx('section', styles.contact)}
    >
      <h2 className={clsx('title', styles.title)}>
        Готов начать сотрудничество?
      </h2>
      <article className={styles.content}>
        <div className={styles.mapBlock}>
          <p className={styles.mapText}>
            Клиенты по всему миру обращаются ко мне, когда важны
            ответственность, профессионализм и индивидуальный подход с учетом их
            целей.
          </p>
          <div className={styles.mapFrame}>
            <DottedMap<ContactMapMarker>
              aria-label="Карта городов онлайн-занятий и переводческих проектов"
              className={styles.map}
              dotColor="var(--text-90)"
              dotRadius={0.16}
              markerColor="var(--primary-30)"
              markers={contactMapMarkers}
              pulse
              renderMarkerOverlay={({ marker }) => (
                <title>{marker.label}</title>
              )}
            />
          </div>
        </div>
        <div className={styles.copy}>
          <p className={styles.subtitle}>Свяжись со мной</p>
          <div className={styles.actions}>
            <Button
              ariaLabel="Telegram"
              text="Telegram"
              icon="true"
              size="large"
              link="https://t.me/sue_onlineenglish"
              type="primary"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.58098 10.6794C7.75614 7.99825 11.8729 6.23053 13.9312 5.37652C19.8152 2.93786 21.0363 2.51432 21.8338 2.50014C22.0092 2.49717 22.3997 2.54038 22.6545 2.74588C22.8663 2.91906 22.9259 3.15326 22.9557 3.31753C22.9822 3.4818 23.0186 3.85619 22.9889 4.14845C22.6712 7.48664 21.2912 15.5873 20.5896 19.3263C20.2951 20.9084 19.7093 21.4388 19.1434 21.4906C17.9123 21.6034 16.9791 20.6804 15.7877 19.9022C13.9246 18.6841 12.8723 17.926 11.0621 16.7376C8.97063 15.364 10.3274 14.609 11.5188 13.3753C11.8298 13.0524 17.2504 8.1391 17.353 7.69346C17.3663 7.63771 17.3796 7.4299 17.2538 7.32039C17.1314 7.21054 16.9492 7.24815 16.8169 7.27783C16.6282 7.32006 13.6532 9.28206 7.88175 13.1635C7.03788 13.7421 6.27345 14.0241 5.58511 14.0093C4.83059 13.9931 3.37459 13.5831 2.29245 13.2328C0.968726 12.803 -0.0869939 12.5757 0.00566664 11.8457C0.0519969 11.4657 0.57826 11.0768 1.58098 10.6794Z" />
              </svg>
              <span>Telegram</span>
            </Button>
            <Button
              ariaLabel="Email"
              text="Email"
              icon="true"
              size="large"
              link="karimovaalsu@yahoo.com"
              type="secondary"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V6.88197L12 11.882L2 6.88197V6Z" />
                <path d="M2 9.11805V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V9.11804L12.8944 13.6708C12.3314 13.9524 11.6686 13.9524 11.1056 13.6708L2 9.11805Z" />
              </svg>
              <span>Email</span>
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
