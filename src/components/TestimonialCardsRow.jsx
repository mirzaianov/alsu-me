import propTypes from 'prop-types';
import TestimonialCard from './TestimonialCard';
import almaz from '../assets/img/almaz.jpeg';
import elena from '../assets/img/elena.jpeg';
import dilara from '../assets/img/dilara.jpeg';
import ruslan from '../assets/img/ruslan.jpeg';
import walter from '../assets/icons/walter.svg';

const testimonialCardData = [
  {
    fullName: 'Елена Юсупова',
    src: elena,
    occupation: 'Методист',
    comment:
      'Ситуация с COVID -19 практически не оставила для меня других вариантов для изучения немецкого языка. Онлайн-курсы с Алсу дают мне возможность работать со своей скоростью, в темпе, который подходит именно мне. Алсу предлагает гибкий график проведения онлайн-занятий, а у меня есть возможность изучать немецкий язык из любой точки и в удобное время суток. Онлайн-обучение с Алсу - эффективный и интересный метод обучения немецкого языка в целом.',
  },
  {
    fullName: 'Алмаз Самигуллин',
    src: almaz,
    occupation: 'Преподаватель',
    comment:
      'Современные реалии диктуют условия для преподавателей относительно публикации статей в иностранных журналах. Не любой человек сможет перевести на английский язык научную статью грамотно. В течении 3-4 лет пользуюсь услугой перевода, которую предоставляет Алсу. Алсу очень грамотно, быстро и за приемлемую цену осуществляет технический перевод.',
  },
  {
    fullName: 'Диляра Габсалямова',
    src: dilara,
    occupation: '?',
    comment:
      'Изучение английского языка с Алсу происходит максимально естественным путем. Независимо от уровня языка Алсу умело погружает в языковую среду. Теперь я не боюсь аудирования, которое вызывало ужас в школе, и с ещё большим интересом изучаю язык благодаря Алсу.',
  },
  {
    fullName: 'Руслан Хасанов',
    src: ruslan,
    occupation: 'Предприниматель',
    comment:
      'Был приятно удивлён и впечатлён тем, что за столь короткий срок добился таких хороших результатов. С радостью продолжу обучение под Вашим патронажем.',
  },
];

const TestimonialCardsRow = ({ isInfiniteScroll, setIsInfiniteScroll }) => {
  return (
    <div
      className={`group-hover:pause inline-block w-max animate-testimonials ${isInfiniteScroll ? '' : 'pause'}`}
    >
      {testimonialCardData.map((item, index) => (
        <div
          key={item.fullName}
          className={`relative mx-[12px] my-0 inline-block h-full`}
        >
          {index === 0 && (
            <div
              className={`group-hover:pause absolute -top-[35px] right-0 aspect-square w-[80px] animate-walter ${isInfiniteScroll ? '' : 'pause'}`}
            >
              <img
                src={walter}
                alt="walter white"
              />
            </div>
          )}
          <TestimonialCard
            {...item}
            isInfiniteScroll={isInfiniteScroll}
            setIsInfiniteScroll={setIsInfiniteScroll}
          />
        </div>
      ))}
    </div>
  );
};

TestimonialCardsRow.propTypes = {
  isInfiniteScroll: propTypes.bool,
  setIsInfiniteScroll: propTypes.func,
};

export default TestimonialCardsRow;